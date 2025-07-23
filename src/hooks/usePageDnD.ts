import { useState, useCallback } from 'react'
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

  const [overSectionId, setOverSectionId] = useState<string | null>(null)

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

      const isNewSection =
        String(active.id).startsWith('selector-') ||
        !sections.some((s) => s.id === active.id)

      if (isNewSection) {
        if (sections.length === 0) {
          const sectionId = String(active.id).startsWith('selector-')
            ? String(active.id).replace('selector-', '')
            : String(active.id)
          addSection(sectionId, {})
        } else {
          const overIndex = sections.findIndex((s) => s.id === over.id)
          insertSectionAt(
            String(active.id),
            overIndex !== -1 ? overIndex : sections.length
          )
        }
      } else {
        const oldIndex = sections.findIndex((s) => s.id === active.id)
        const newIndex = sections.findIndex((s) => s.id === over.id)
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          setSections(arrayMove(sections, oldIndex, newIndex))
        }
      }
    },
    [sections, setSections, addSection, insertSectionAt]
  )

  return { sensors, handleDragEnd, overSectionId, handleDragOver }
}
