import { Box } from 'grommet'

type PanelWrapperProps = React.ComponentProps<typeof Box> & {
  children?: React.ReactNode
  borderSide?: 'top' | 'bottom' | 'left' | 'right'
}

const PanelWrapper = ({
  children,
  borderSide = 'right',
  ...rest
}: PanelWrapperProps) => {
  return (
    <Box
      background="dark-1"
      align="center"
      justify="start"
      border={{ side: borderSide, color: 'dark-2' }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default PanelWrapper
