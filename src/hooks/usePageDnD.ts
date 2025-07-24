import { useState, useCallback } from 'react'
import type { Active } from '@dnd-kit/core'
import { usePageStore } from '@stores/usePageStore'
import { arrayMove } from '@dnd-kit/sortable'
import { insertSectionAtUtil } from '@utils/insertSectionAt'
import {
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'

export function usePageDnD() {
  const sections = usePageStore((state) => state.sections)
  const setSections = usePageStore((state) => state.setSections)
  const addSection = usePageStore((state) => state.addSection)

  // Drag state
  const [overSectionId, setOverSectionId] = useState<string | null>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [active, setActive] = useState<Active | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = useCallback(
    (event: import('@dnd-kit/core').DragStartEvent) => {
      setActiveId(event.active?.id ? String(event.active.id) : null)
      setActive(event.active)
      setIsDragging(true)
    },
    []
  )

  const handleDragOver = useCallback(
    (event: import('@dnd-kit/core').DragOverEvent) => {
      setOverSectionId(event.over ? String(event.over.id) : null)
    },
    []
  )

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
    (event: DragEndEvent) => {
      const { active, over } = event
      if (!over) return

      const activeIdStr = String(active.id)
      const overIdStr = String(over.id)

      const isNewSection =
        activeIdStr.startsWith('selector-') ||
        !sections.some((s) => s.id === activeIdStr)

      if (isNewSection) {
        if (sections.length === 0) {
          const sectionId = activeIdStr.startsWith('selector-')
            ? activeIdStr.replace('selector-', '')
            : activeIdStr
          addSection(sectionId, {})
        } else {
          const overIndex = sections.findIndex((s) => s.id === overIdStr)
          insertSectionAt(
            activeIdStr,
            overIndex !== -1 ? overIndex : sections.length
          )
        }
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
    [sections, setSections, addSection, insertSectionAt]
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
