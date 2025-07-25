import type { ReactNode } from 'react'

export type PanelTabContentProps = {
  children: ReactNode
  value: string
  activeValue?: string
}
