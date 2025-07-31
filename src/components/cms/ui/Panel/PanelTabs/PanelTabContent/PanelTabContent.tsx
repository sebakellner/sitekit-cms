import { Box } from '@chakra-ui/react'
import type { FC } from 'react'
import type { PanelTabContentProps } from './PanelTabContent.types'

const PanelTabContent: FC<PanelTabContentProps> = ({
  children,
  value,
  activeValue,
}) => {
  const isActive = value === activeValue
  return <Box display={isActive ? 'flex' : 'none'}>{children}</Box>
}

export default PanelTabContent
