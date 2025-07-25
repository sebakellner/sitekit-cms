import type { Button } from 'grommet'

export type SidebarLinkProps = {
  icon: React.ReactNode
  active?: boolean
  label?: string
} & React.ComponentProps<typeof Button>
