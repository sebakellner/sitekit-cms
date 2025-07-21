import { Box } from 'grommet'
import { usePageStore } from '@stores/usePageStore'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import PageSectionRenderer from './PageSectionRenderer'

const PageCanvas = () => {
  const sections = usePageStore((state) => state.sections)
  const setSections = usePageStore((state) => state.setSections)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )
  const sectionIds = sections.map((s) => s.id)

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
        onDragEnd={({ active, over }) => {
          if (over && active.id !== over.id) {
            const oldIndex = sections.findIndex((s) => s.id === active.id)
            const newIndex = sections.findIndex((s) => s.id === over.id)
            setSections(arrayMove(sections, oldIndex, newIndex))

            if (oldIndex === -1 || newIndex === -1) {
              console.error(
                'Invalid section ID detected during drag-and-drop operation.'
              )
              return
            }
          }
        }}
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
