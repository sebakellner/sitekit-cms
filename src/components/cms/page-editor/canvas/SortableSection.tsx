import React, { useEffect, useRef, useMemo, useCallback } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { usePageStore } from '@stores/usePageStore'
import {
  DRAGGING_Z_INDEX,
  NORMAL_Z_INDEX,
  DRAGGING_MIN_HEIGHT,
  DRAGGING_BG,
  OVER_BG,
} from './constants'
import type { PageStore } from '@src/types'

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

  const selectSectionSelector = useCallback(
    (state: PageStore) => state.selectSection,
    []
  )
  const selectSection = usePageStore(selectSectionSelector)
  const wasDragging = useRef(false)

  useEffect(() => {
    if (!wasDragging.current && isDragging) {
      selectSection(id)
    }
    wasDragging.current = isDragging
  }, [isDragging, id, selectSection])

  const style = useMemo<React.CSSProperties>(
    () => ({
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      transition: transition,
      touchAction: 'none',
      width: '100%',
      boxSizing: 'border-box',
      cursor: isDragging ? 'grabbing' : 'grab',
      zIndex: isDragging ? DRAGGING_Z_INDEX : NORMAL_Z_INDEX,
      position: 'relative',
      minHeight: isDragging ? DRAGGING_MIN_HEIGHT : undefined,
      background: isDragging ? DRAGGING_BG : isOver ? OVER_BG : undefined,
    }),
    [transform, transition, isDragging, isOver]
  )

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export default SortableSection
