import React, { useEffect } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { usePageStore } from '@stores/usePageStore'
import {
  DRAGGING_Z_INDEX,
  NORMAL_Z_INDEX,
  DRAGGING_MIN_HEIGHT,
  DRAGGING_BG,
  OVER_BG,
} from './constants'

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
    zIndex: isDragging ? DRAGGING_Z_INDEX : NORMAL_Z_INDEX,
    position: isDragging ? 'relative' : undefined,
    minHeight: DRAGGING_MIN_HEIGHT,
    background: isDragging ? DRAGGING_BG : isOver ? OVER_BG : undefined,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export default SortableSection
