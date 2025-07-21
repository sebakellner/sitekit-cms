import React from 'react'
import { useSortable } from '@dnd-kit/sortable'

type Props = {
  id: string
  children: React.ReactNode
}

const SortableSection: React.FC<Props> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
    touchAction: 'none',
    width: '100%',
    boxSizing: 'border-box',
    cursor: isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 1000 : 1,
    minHeight: 40,
  }
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export default SortableSection
