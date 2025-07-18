import React from 'react'
import type { ReactNode } from 'react'
import { Box } from 'grommet'
import { OverlayBorder } from './OverlayBorder'
import { OverlayLabel } from './OverlayLabel'
import { BEM_LABEL_ZINDEX } from './constants'

interface InspectorOverlayProps {
  label: string
  showOverlay?: boolean
  isSelected?: boolean
  onSelect?: () => void
  children: ReactNode
  overlayLabelPosition?: 'above' | 'below'
}

export const InspectorOverlay: React.FC<InspectorOverlayProps> = ({
  label,
  showOverlay = false,
  isSelected = false,
  onSelect,
  children,
  overlayLabelPosition = 'above',
}) => {
  const BEM_CHILD_ZINDEX = BEM_LABEL_ZINDEX - 2

  return (
    <Box style={{ position: 'relative' }}>
      {showOverlay && (
        <OverlayBorder isSelected={isSelected} onSelect={onSelect} />
      )}
      {showOverlay && (
        <OverlayLabel
          label={label}
          isSelected={isSelected}
          position={overlayLabelPosition}
        />
      )}
      <Box style={{ position: 'relative', zIndex: BEM_CHILD_ZINDEX }}>
        {children}
      </Box>
    </Box>
  )
}
