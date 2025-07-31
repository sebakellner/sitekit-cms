import type { FlexProps } from '@chakra-ui/react'
import type { PanelBoxProps } from './PanelBox.types'

const DEFAULT_BORDER_COLOR = 'gray.600'

export const borderMap: Record<
  Exclude<NonNullable<PanelBoxProps['borderSide']>, 'none'>,
  Partial<FlexProps>
> = {
  top: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: DEFAULT_BORDER_COLOR,
  },
  bottom: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: DEFAULT_BORDER_COLOR,
  },
  left: {
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: DEFAULT_BORDER_COLOR,
  },
  right: {
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: DEFAULT_BORDER_COLOR,
  },
  vertical: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: DEFAULT_BORDER_COLOR,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: DEFAULT_BORDER_COLOR,
  },
  horizontal: {
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: DEFAULT_BORDER_COLOR,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: DEFAULT_BORDER_COLOR,
  },
}
