import { Box } from 'grommet'
import type { PanelWrapperProps } from './PanelWrapper.types'

const PanelWrapper = ({
  children,
  borderSide = 'right',
  ...rest
}: PanelWrapperProps) => {
  return (
    <Box
      background="dark-1"
      align="center"
      fill
      border={{ side: borderSide, color: 'dark-2' }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default PanelWrapper
