import React, { useEffect, useMemo } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import {
  DRAGGING_MIN_HEIGHT,
  DRAGGING_OPACITY,
  NORMAL_DRAGGING_OPACITY,
} from '@src/features/editor/constants/DnD'
import type { SortableSectionProps } from './SortableSection.types'
import { useSectionStore } from '@features/editor/store/section/useSectionStore'
import type { SectionStore } from '@features/editor/store/section/section.type'

const selectSectionSelector = (state: SectionStore) => state.selectSection

const SortableSection: React.FC<SortableSectionProps> = ({ id, children }) => {
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

  const selectSection = useSectionStore(selectSectionSelector)

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
