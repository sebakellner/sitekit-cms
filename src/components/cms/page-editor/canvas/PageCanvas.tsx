import { Box } from 'grommet'
import { Inspectable } from '../bem/Inspectable'
import { usePageStore } from '@stores/usePageStore'
import { sectionMap } from '@lib/sectionMap'
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
import SortableSection from './SortableSection'

function renderSection(
  id: string,
  name: string,
  props: Record<string, unknown>,
  idx: number
) {
  if (!(name in sectionMap)) return null
  const section = sectionMap[name as keyof typeof sectionMap]
  if (!section || !section.component) return null
  const Component = section.component

  return (
    <SortableSection id={id} key={id}>
      <Inspectable
        id={id}
        name={name}
        overlayLabelPosition={idx === 0 ? 'below' : 'above'}
      >
        <Component {...props} />
      </Inspectable>
    </SortableSection>
  )
}

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
          {sections.map((section, idx) =>
            renderSection(section.id, section.name, section.props, idx)
          )}
        </SortableContext>
      </DndContext>
    </Box>
  )
}

export default PageCanvas
