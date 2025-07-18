import React, { useState, useRef } from 'react'
import type { ReactNode } from 'react'
import { InspectorOverlay } from './InspectorOverlay'

interface InspectableProps {
  label: string
  children: ReactNode
}

export const Inspectable: React.FC<InspectableProps> = ({
  label,
  children,
}) => {
  const [selected, setSelected] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const showOverlay = hovered || selected

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)
  const handleSelect = () => setSelected((prev) => !prev)

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '100%' }}
    >
      <InspectorOverlay
        label={label}
        showOverlay={showOverlay}
        isSelected={selected}
        onSelect={handleSelect}
      >
        {children}
      </InspectorOverlay>
    </div>
  )
}
