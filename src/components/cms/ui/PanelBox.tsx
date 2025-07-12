import { Box } from 'grommet'

type Props = {
  children: React.ReactNode
  borderSide?: 'top' | 'bottom' | 'left' | 'right' | false
}

const PanelBox = ({ children, borderSide = 'bottom', ...restProps }: Props) => {
  const borderProp = borderSide
    ? { side: borderSide, color: 'dark-3' }
    : undefined
  return (
    <Box
      pad={{ horizontal: 'medium', vertical: 'medium' }}
      gap="xsmall"
      flex="grow"
      border={borderProp}
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default PanelBox
