import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { InspectorOverlay } from './InspectorOverlay'
import { Box } from 'grommet'

interface InspectableProps {
  label: string
  children: ReactNode
  overlayLabelPosition?: 'above' | 'below'
}

export const Inspectable: React.FC<InspectableProps> = ({
  label,
  children,
  overlayLabelPosition = 'above',
}) => {
  const [selected, setSelected] = useState(false)
  const [hovered, setHovered] = useState(false)

  const showOverlay = hovered || selected

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)
  const handleSelect = () => setSelected((prev) => !prev)

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="100%"
    >
      <InspectorOverlay
        label={label}
        showOverlay={showOverlay}
        isSelected={selected}
        onSelect={handleSelect}
        overlayLabelPosition={overlayLabelPosition}
      >
        {children}
      </InspectorOverlay>
    </Box>
  )
}
