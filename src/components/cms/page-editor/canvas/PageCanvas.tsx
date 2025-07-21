import { Box } from 'grommet'
import { usePageStore } from '@stores/usePageStore'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import PageSectionRenderer from './PageSectionRenderer'
import { useCallback } from 'react'

const PageCanvas = () => {
  const sections = usePageStore((state) => state.sections)
  const setSections = usePageStore((state) => state.setSections)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )
  const sectionIds = sections.map((s) => s.id)

  const handleDragEndCb = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (over && active.id !== over.id) {
        const currentSections = usePageStore.getState().sections
        const oldIndex = currentSections.findIndex(
          (s) => s.id === String(active.id)
        )
        const newIndex = currentSections.findIndex(
          (s) => s.id === String(over.id)
        )

        if (oldIndex === -1 || newIndex === -1) {
          console.error(
            `Invalid section ID detected during drag-and-drop operation. Active: ${active.id}, Over: ${over.id}`
          )
          return
        }

        setSections(arrayMove(currentSections, oldIndex, newIndex))
      }
    },
    [setSections]
  )

  return (
    <Box
      style={{ display: 'block' }}
      fill
      background="white"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEndCb}
      >
        <SortableContext
          items={sectionIds}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section, idx) => (
            <PageSectionRenderer
              key={section.id}
              id={section.id}
              name={section.name}
              props={section.props}
              idx={idx}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Box>
  )
}

export default PageCanvas
