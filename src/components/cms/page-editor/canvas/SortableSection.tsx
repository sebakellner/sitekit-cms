import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

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
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none',
    width: '100%',
    boxSizing: 'border-box',
    cursor: isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 2 : 1,
    minHeight: 40,
    background: isDragging ? '#f0f0f0' : undefined,
  }
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export default SortableSection
