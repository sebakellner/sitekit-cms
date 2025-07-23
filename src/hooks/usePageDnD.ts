import { useCallback } from 'react'
import { usePageStore } from '@stores/usePageStore'
import { arrayMove } from '@dnd-kit/sortable'
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

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  const insertSectionAt = useCallback(
    (id: string, index: number) => {
      const sectionId = String(id).startsWith('selector-')
        ? String(id).replace('selector-', '')
        : id
      const uniqueId = `${sectionId}-${Date.now()}`
      const newSection = {
        id: uniqueId,
        name: sectionId,
        props: {},
      }
      const newSections = [...sections]
      newSections.splice(index, 0, newSection)
      setSections(newSections)
    },
    [sections, setSections]
  )

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (over) {
        const isNewSection =
          String(active.id).startsWith('selector-') ||
          !sections.some((s) => s.id === active.id)
        if (isNewSection) {
          if (sections.length === 0) {
            const sectionId = String(active.id).startsWith('selector-')
              ? String(active.id).replace('selector-', '')
              : (active.id as string)
            addSection(sectionId, {})
          } else {
            const overIndex = sections.findIndex((s) => s.id === over.id)
            if (overIndex !== -1) {
              insertSectionAt(active.id as string, overIndex)
            } else {
              insertSectionAt(active.id as string, sections.length)
            }
          }
        } else {
          const oldIndex = sections.findIndex((s) => s.id === active.id)
          const newIndex = sections.findIndex((s) => s.id === over.id)
          if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
            setSections(arrayMove(sections, oldIndex, newIndex))
          }
        }
      }
    },
    [sections, setSections, addSection, insertSectionAt]
  )

  return { sensors, handleDragEnd }
}
