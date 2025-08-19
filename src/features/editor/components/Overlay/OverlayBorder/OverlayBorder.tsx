import React from 'react'
import {
  BEM_BORDER_COLOR,
  BEM_BORDER_SIZE_DEFAULT,
  BEM_BORDER_ZINDEX,
} from '@src/features/editor/constants/inspector'
import type { OverlayBorderProps } from './OverlayBorder.types'
import { Box } from '@chakra-ui/react'

const OverlayBorder: React.FC<OverlayBorderProps> = ({ onSelect }) => (
  <Box
    borderColor={BEM_BORDER_COLOR}
    borderWidth={BEM_BORDER_SIZE_DEFAULT}
    data-testid="overlay-border"
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
  />
)

export default OverlayBorder
