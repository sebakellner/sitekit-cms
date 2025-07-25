import type { Box } from 'grommet'

export type PanelWrapperProps = React.ComponentProps<typeof Box> & {
  children?: React.ReactNode
  borderSide?: 'top' | 'bottom' | 'left' | 'right'
}
