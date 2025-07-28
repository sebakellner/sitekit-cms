import { useState, useCallback } from 'react'
import type { Active, DragStartEvent, DragOverEvent } from '@dnd-kit/core'
import { useSectionStore } from '../store/section/useSectionStore'
import { arrayMove } from '@dnd-kit/sortable'
import { insertSectionAtUtil } from '@src/features/editor/utils/insertSectionAt'
import {
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import { SELECTOR_PREFIX } from '@src/features/editor/constants/DnD'

export function usePageDnD() {
  const sections = useSectionStore((state) => state.sections)
  const setSections = useSectionStore((state) => state.setSections)

  const [overSectionId, setOverSectionId] = useState<string | null>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [active, setActive] = useState<Active | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active?.id ? String(event.active.id) : null)
    setActive(event.active)
    setIsDragging(true)
  }, [])

  const handleDragOver = useCallback((event: DragOverEvent) => {
    setOverSectionId(event.over ? String(event.over.id) : null)
  }, [])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 2 } })
  )

  const insertSectionAt = useCallback(
    (id: string, index: number) => {
      insertSectionAtUtil(sections, setSections, id, index)
    },
    [sections, setSections]
  )

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event
      if (!over) return

      const activeIdStr = String(active.id)
      const overIdStr = String(over.id)

      const isNewSection =
        activeIdStr.startsWith(SELECTOR_PREFIX) ||
        !sections.some((s) => s.id === activeIdStr)

      if (isNewSection) {
        const sectionId = activeIdStr.startsWith(SELECTOR_PREFIX)
          ? activeIdStr.replace(SELECTOR_PREFIX, '')
          : activeIdStr
        const overIndex = sections.findIndex((s) => s.id === overIdStr)
        await insertSectionAt(
          sectionId,
          overIndex !== -1 ? overIndex : sections.length
        )
      } else {
        const oldIndex = sections.findIndex((s) => s.id === activeIdStr)
        const newIndex = sections.findIndex((s) => s.id === overIdStr)
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          setSections(arrayMove(sections, oldIndex, newIndex))
        }
      }
      setActiveId(null)
      setActive(null)
      setIsDragging(false)
    },
    [sections, setSections, insertSectionAt]
  )

  return {
    sensors,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    overSectionId,
    activeId,
    active,
    isDragging,
  }
}
