import React from 'react'
import { Box, Text } from 'grommet'
import { Layers } from 'lucide-react'
import {
  BEM_LABEL_TOP_ABOVE,
  BEM_LABEL_TOP_BELOW,
  BEM_LABEL_PAD_HORIZONTAL,
  BEM_LABEL_PAD_VERTICAL,
  BEM_LABEL_ROUND_SIZE,
  BEM_LABEL_ZINDEX,
  BEM_BORDER_COLOR,
} from './constants'

interface OverlayLabelProps {
  label: string
  isSelected: boolean
  position?: 'above' | 'below'
}

export const OverlayLabel: React.FC<OverlayLabelProps> = ({
  label,
  isSelected,
  position = 'above',
}) => {
  const labelBg = isSelected ? BEM_BORDER_COLOR : 'transparent'
  const labelColor = isSelected ? 'white' : BEM_BORDER_COLOR
  const labelIconColor = isSelected ? 'white' : BEM_BORDER_COLOR
  return (
    <Box
      direction="row"
      align="center"
      gap="xsmall"
      justify="center"
      background={labelBg}
      pad={{
        horizontal: BEM_LABEL_PAD_HORIZONTAL,
        vertical: BEM_LABEL_PAD_VERTICAL,
      }}
      style={{
        position: 'absolute',
        left: 0,
        top: position === 'above' ? BEM_LABEL_TOP_ABOVE : BEM_LABEL_TOP_BELOW,
        zIndex: BEM_LABEL_ZINDEX,
        pointerEvents: 'none',
      }}
      round={{
        corner: position === 'above' ? 'top' : 'bottom',
        size: BEM_LABEL_ROUND_SIZE,
      }}
      hoverIndicator={false}
      focusIndicator={false}
    >
      <Layers size={12} color={labelIconColor} />
      <Text size="xsmall" color={labelColor}>
        {label}
      </Text>
    </Box>
  )
}
