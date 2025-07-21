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
import { restrictToParentElement } from '@dnd-kit/modifiers'
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
        modifiers={[restrictToParentElement]}
        onDragStart={() => {}}
        onDragEnd={({ active, over }) => {
          if (active.id !== over?.id) {
            const oldIndex = sections.findIndex((s) => s.id === active.id)
            const newIndex = sections.findIndex((s) => s.id === over?.id)
            setSections(arrayMove(sections, oldIndex, newIndex))
          }
        }}
        onDragCancel={() => {}}
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
