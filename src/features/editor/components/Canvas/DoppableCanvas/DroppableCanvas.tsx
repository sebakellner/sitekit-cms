import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import type { DroppableCanvasProps } from './DroppableCanvas.types'

const DroppableCanvas: React.FC<DroppableCanvasProps> = ({ children }) => {
  const { setNodeRef } = useDroppable({ id: 'page-canvas' })
  return <div ref={setNodeRef}>{children}</div>
}

export default DroppableCanvas
