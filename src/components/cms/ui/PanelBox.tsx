import { Box } from 'grommet'

export type PanelBoxProps = {
  children: React.ReactNode
  borderSide?: 'top' | 'bottom' | 'left' | 'right' | false
} & React.ComponentProps<typeof Box>

const PanelBox = ({
  children,
  borderSide = 'bottom',
  ...restProps
}: PanelBoxProps) => {
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
