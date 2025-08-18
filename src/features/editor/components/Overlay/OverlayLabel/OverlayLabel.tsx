import React from 'react'
import { Box, Text } from 'grommet'
import { Layers, X } from 'lucide-react'
import {
  BEM_LABEL_TOP_ABOVE,
  BEM_LABEL_TOP_BELOW,
  BEM_LABEL_PAD_HORIZONTAL,
  BEM_LABEL_PAD_VERTICAL,
  BEM_LABEL_ROUND_SIZE,
  BEM_LABEL_ZINDEX,
  BEM_BORDER_COLOR,
} from '@src/features/editor/constants/inspector'
import type { OverlayLabelProps } from './OverlayLabel.types'
import { useSectionStore } from '@features/editor/store/section/useSectionStore'

const OverlayLabel: React.FC<OverlayLabelProps> = ({
  label,
  isSelected,
  position = 'above',
  sectionId,
}) => {
  const labelBg = isSelected ? BEM_BORDER_COLOR : 'transparent'
  const labelColor = isSelected ? 'white' : BEM_BORDER_COLOR
  const labelIconColor = isSelected ? 'white' : BEM_BORDER_COLOR

  const deleteSection = useSectionStore((state) => state.deleteSection)

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    deleteSection(id)
  }

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
      <X
        size={12}
        color={labelIconColor}
        style={{ cursor: 'pointer' }}
        onClick={(e) => handleDelete(e, sectionId)}
      />
    </Box>
  )
}

export default OverlayLabel
