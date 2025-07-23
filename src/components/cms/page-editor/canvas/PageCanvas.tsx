import { Box } from 'grommet'
import { usePageStore } from '@stores/usePageStore'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import PageSectionRenderer from './PageSectionRenderer'
import DroppableCanvas from './DroppableCanvas'

const PageCanvas = () => {
  const sections = usePageStore((state) => state.sections)

  const sectionIds = sections.map((s) => s.id)

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
            />
          ))}
        </DroppableCanvas>
      </SortableContext>
    </Box>
  )
}

export default PageCanvas
