import { Box } from 'grommet'

type PanelBoxScrollProps = {
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
      overflow={{ vertical: 'auto' }}
      className="custom-scrollbar"
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default PanelBoxScroll
