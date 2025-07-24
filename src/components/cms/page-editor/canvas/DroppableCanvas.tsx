import { useDroppable } from '@dnd-kit/core'
import React from 'react'

interface DroppableCanvasProps {
  children: React.ReactNode
}

const DroppableCanvas: React.FC<DroppableCanvasProps> = ({ children }) => {
  const { setNodeRef } = useDroppable({ id: 'page-canvas' })
  return <div ref={setNodeRef}>{children}</div>
}

export default DroppableCanvas
