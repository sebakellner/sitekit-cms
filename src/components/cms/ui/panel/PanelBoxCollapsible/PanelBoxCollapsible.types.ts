import type { ReactNode } from 'react'
import type { PanelBoxProps } from '../PanelBox'

export type PanelBoxCollapsibleProps = {
  title: ReactNode
  children: ReactNode
  collapsedGap?: string
} & PanelBoxProps
