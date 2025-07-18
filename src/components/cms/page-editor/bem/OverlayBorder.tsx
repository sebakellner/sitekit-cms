import React from 'react'
import { Box } from 'grommet'
import {
  BEM_BORDER_COLOR,
  BEM_BORDER_SIZE_SELECTED,
  BEM_BORDER_SIZE_DEFAULT,
  BEM_BORDER_ZINDEX,
} from './constants'

interface OverlayBorderProps {
  isSelected: boolean
  onSelect?: () => void
}

export const OverlayBorder: React.FC<OverlayBorderProps> = ({
  isSelected,
  onSelect,
}) => (
  <Box
    border={{
      color: BEM_BORDER_COLOR,
      size: isSelected ? BEM_BORDER_SIZE_SELECTED : BEM_BORDER_SIZE_DEFAULT,
    }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: BEM_BORDER_ZINDEX,
      cursor: 'default',
      pointerEvents: onSelect ? 'auto' : 'none',
    }}
    onClick={onSelect}
    hoverIndicator={false}
    focusIndicator={false}
  />
)
