import { Box } from '@chakra-ui/react'
import type { PanelBoxScrollProps } from './PanelBoxScroll.types'

const PanelBoxScroll = ({
  children,
  pad = 'medium',
  gap = 'medium',
  ...restProps
}: PanelBoxScrollProps) => {
  return (
    <Box
      p={pad}
      gap={gap}
      w="100%"
      overflowY="auto"
      overflowX="hidden"
      className="custom-scrollbar"
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default PanelBoxScroll
