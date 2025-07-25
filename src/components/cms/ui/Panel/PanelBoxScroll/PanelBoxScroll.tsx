import { Box } from 'grommet'
import type { PanelBoxScrollProps } from './PanelBoxScroll.types'

const PanelBoxScroll = ({
  children,
  pad = 'medium',
  gap = 'medium',
  ...restProps
}: PanelBoxScrollProps) => {
  return (
    <Box
      pad={pad}
      gap={gap}
      width="100%"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
      className="custom-scrollbar"
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default PanelBoxScroll
