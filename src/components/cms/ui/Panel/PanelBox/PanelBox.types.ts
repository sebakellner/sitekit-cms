import type { FlexProps } from '@chakra-ui/react'

export type PanelBoxProps = {
  children: React.ReactNode
  borderSide?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'vertical'
    | 'horizontal'
    | 'none'
  p?: number | string
  gap?: number | string
} & FlexProps
