import React, { useEffect } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { usePageStore } from '@stores/usePageStore'

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
    isOver,
  } = useSortable({ id })

  const selectSection = usePageStore((state) => state.selectSection)

  useEffect(() => {
    if (isDragging) {
      selectSection(id)
    }
  }, [isDragging, id, selectSection])

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition: transition,
    touchAction: 'none',
    width: '100%',
    boxSizing: 'border-box',
    cursor: isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 9999 : 1,
    position: isDragging ? 'relative' : undefined,
    minHeight: 40,
    background: isDragging ? '#f0f0f0' : isOver ? '#e0e7ff' : undefined,
    pointerEvents: isDragging ? 'none' : undefined,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export default SortableSection
