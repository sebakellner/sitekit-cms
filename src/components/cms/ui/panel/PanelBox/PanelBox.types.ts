import type { Box } from 'grommet'

export type PanelBoxProps = {
  children: React.ReactNode
  borderSide?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'vertical'
    | 'horizontal'
    | false
  pad?: string | { horizontal?: string; vertical?: string }
} & React.ComponentProps<typeof Box>
