import { Box } from 'grommet'
import { SELECTOR_PREFIX } from '@constants/DnD'
import { usePageStore } from '@stores/usePageStore'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import PageSectionRenderer from './PageSectionRenderer'
import DroppableCanvas from './DroppableCanvas'

interface PageCanvasProps {
  overSectionId?: string | null
  activeId?: string | null
}

const PageCanvas = ({ overSectionId, activeId }: PageCanvasProps) => {
  const sections = usePageStore((state) => state.sections)

  const sectionIds = sections.map((s) => s.id)
  const isDraggingFromSelector =
    activeId && String(activeId).startsWith(SELECTOR_PREFIX)

  return (
    <Box
      style={{ display: 'block' }}
      fill
      background="white"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
    >
      <SortableContext
        items={sectionIds}
        strategy={verticalListSortingStrategy}
      >
        <DroppableCanvas>
          {sections.map(({ id, name, props }, idx) => (
            <PageSectionRenderer
              key={id}
              id={id}
              name={name}
              props={props}
              idx={idx}
              showDivider={!!(isDraggingFromSelector && overSectionId === id)}
            />
          ))}
        </DroppableCanvas>
      </SortableContext>
    </Box>
  )
}

export default PageCanvas
