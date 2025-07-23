import { useDraggable } from '@dnd-kit/core'

interface DraggableSelectorItemProps {
  id: string
  children: React.ReactNode
}

const DraggableSelectorItem = ({
  id,
  children,
}: DraggableSelectorItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  )
}

export default DraggableSelectorItem
