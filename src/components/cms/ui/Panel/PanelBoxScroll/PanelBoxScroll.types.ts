import type { Box } from 'grommet'

export type PanelBoxScrollProps = React.ComponentProps<typeof Box> & {
  children: React.ReactNode
  pad?: string
  gap?: string
}
