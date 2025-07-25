import React from 'react'
import { Box } from 'grommet'

import { BEM_CHILD_ZINDEX } from '@src/features/editor/constants/inspector'
import type { InspectorOverlayProps } from './InspectorOverlay.types'
import { OverlayBorder } from '../OverlayBorder'
import { OverlayLabel } from '../OverlayLabel'

const InspectorOverlay: React.FC<InspectorOverlayProps> = ({
  label,
  showOverlay = false,
  isSelected = false,
  onSelect,
  children,
  overlayLabelPosition = 'above',
}) => {
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

export default InspectorOverlay
