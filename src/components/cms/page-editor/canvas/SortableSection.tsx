import React, { useEffect, useMemo } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { usePageStore } from '@stores/usePageStore'
import {
  DRAGGING_Z_INDEX,
  NORMAL_Z_INDEX,
  DRAGGING_MIN_HEIGHT,
  DRAGGING_OPACITY,
  NORMAL_DRAGGING_OPACITY,
} from '@constants/DnD'
import type { PageStore } from '@src/types'

type Props = {
  id: string
  children: React.ReactNode
}

const selectSectionSelector = (state: PageStore) => state.selectSection

const SortableSection: React.FC<Props> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    data: {
      renderDragOverlay: () => children,
    },
  })

  const selectSection = usePageStore(selectSectionSelector)

  useEffect(() => {
    if (isDragging) {
      selectSection(id)
    }
  }, [isDragging, id, selectSection])

  const style = useMemo<React.CSSProperties>(
    () => ({
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      transition: transition ?? undefined,
      touchAction: 'none',
      width: '100%',
      boxSizing: 'border-box',
      cursor: isDragging ? 'grabbing' : 'grab',
      zIndex: isDragging ? DRAGGING_Z_INDEX : NORMAL_Z_INDEX,
      position: 'relative',
      minHeight: isDragging ? DRAGGING_MIN_HEIGHT : undefined,
      opacity: isDragging ? DRAGGING_OPACITY : NORMAL_DRAGGING_OPACITY,
    }),
    [transform, isDragging, transition]
  )

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export default SortableSection
