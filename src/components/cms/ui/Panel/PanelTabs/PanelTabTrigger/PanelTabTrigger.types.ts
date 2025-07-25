import type { ReactNode } from 'react'

export type PanelTabTriggerProps = {
  icon?: ReactNode
  label: ReactNode
  value: string
  active?: boolean
  setActiveValue?: (value: string) => void
}
