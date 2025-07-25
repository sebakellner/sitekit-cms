import type { ReactNode } from 'react'

export type PanelTabListProps = {
  children: ReactNode
}

export type PanelTabListInjectedProps = {
  activeValue?: string
  setActiveValue?: (value: string) => void
}
