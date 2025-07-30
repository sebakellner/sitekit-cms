import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Box } from 'grommet'

import { SELECTOR_PREFIX } from '@src/features/editor/constants/DnD'
import { useSectionStore } from '@features/editor/store/section/useSectionStore'
import type { PageCanvasProps } from './PageCanvas.types'
import { DroppableCanvas } from '../DroppableCanvas'
import { PageSectionRenderer } from '../PageSectionRenderer'

const PageCanvas = ({ overSectionId, activeId }: PageCanvasProps) => {
  const sections = useSectionStore((state) => state.sections)

  const sectionIds = sections.map((s) => s.id)
  const isDraggingFromSelector =
    activeId && String(activeId).startsWith(SELECTOR_PREFIX)

  return (
    <Box
      style={{ display: 'block' }}
      fill
      background="white"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
      data-testid="page-canvas"
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
