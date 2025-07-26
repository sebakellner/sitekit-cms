import type { PanelWrapper } from '@components/cms/ui'

export type SidebarProps = {
  links?: {
    icon: React.ReactNode
    label: string
    active?: boolean
  }[]
} & React.ComponentProps<typeof PanelWrapper>
