import { Box } from 'grommet'
import { usePageStore } from '@stores/usePageStore'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import PageSectionRenderer from './PageSectionRenderer'
import { useDroppable } from '@dnd-kit/core'

const PageCanvas = () => {
  const sections = usePageStore((state) => state.sections)

  const { setNodeRef } = useDroppable({
    id: 'page-canvas',
  })

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
        <div ref={setNodeRef}>
          {sections.map((section, idx) => (
            <PageSectionRenderer
              key={section.id}
              id={section.id}
              name={section.name}
              props={section.props}
              idx={idx}
            />
          ))}
        </div>
      </SortableContext>
    </Box>
  )
}

export default PageCanvas
