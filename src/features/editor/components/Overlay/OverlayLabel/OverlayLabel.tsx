import React from 'react'
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
import { Box, Button, Text } from '@chakra-ui/react'

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
      display="flex"
      position="absolute"
      left={0}
      top={position === 'above' ? BEM_LABEL_TOP_ABOVE : BEM_LABEL_TOP_BELOW}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap={2}
      background={labelBg}
      px={BEM_LABEL_PAD_HORIZONTAL}
      py={BEM_LABEL_PAD_VERTICAL}
      zIndex={BEM_LABEL_ZINDEX}
      borderTopRadius={position === 'above' ? BEM_LABEL_ROUND_SIZE : 0}
      borderBottomRadius={position === 'below' ? BEM_LABEL_ROUND_SIZE : 0}
    >
      <Layers size={12} color={labelIconColor} />
      <Text fontSize={12} color={labelColor}>
        {label}
      </Text>
      {isSelected && (
        <Button
          variant="ghost"
          size="2xs"
          p={0}
          _hover={{ bg: 'transparent' }}
          onClick={(e) => handleDelete(e, sectionId)}
          data-testid="el-delete-button"
        >
          <X size={12} color={labelIconColor} />
        </Button>
      )}
    </Box>
  )
}

export default OverlayLabel
