import { useDraggable } from '@dnd-kit/core'
import { Box } from 'grommet'

interface DraggableSelectorItemProps {
  id: string
  children: React.ReactNode
}

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
          background={{ color: 'dark-1', opacity: 0.5 }}
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
