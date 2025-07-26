import { useDraggable } from '@dnd-kit/core'
import { Box } from 'grommet'

import { DRAG_OVERLAY_OPACITY } from '@src/features/editor/constants/DnD'
import type { DraggableSelectorItemProps } from './DraggableSelectorItem.types'

const DraggableSelectorItem = ({
  id,
  children,
}: DraggableSelectorItemProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    data: {
      renderDragOverlay: () => (
        <Box
          pad="xsmall"
          round="small"
          background={{ color: 'dark-1', opacity: DRAG_OVERLAY_OPACITY }}
        >
          {children}
        </Box>
      ),
    },
  })

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  )
}

export default DraggableSelectorItem
