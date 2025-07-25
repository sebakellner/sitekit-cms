import { Box } from 'grommet'
import type { FC } from 'react'
import type { PanelTabContentProps } from './PanelTabContent.types'

const PanelTabContent: FC<PanelTabContentProps> = ({
  children,
  value,
  activeValue,
}) => {
  const isActive = value === activeValue
  return <Box style={{ display: isActive ? 'flex' : 'none' }}>{children}</Box>
}

export default PanelTabContent
