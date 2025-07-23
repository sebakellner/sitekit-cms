import { Box } from 'grommet'

type PanelBoxScrollProps = React.ComponentProps<typeof Box> & {
  children: React.ReactNode
  pad?: string
  gap?: string
}

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
