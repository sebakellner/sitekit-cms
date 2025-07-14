import { Box } from 'grommet'

export type PanelBoxProps = {
  children: React.ReactNode
  borderSide?: 'top' | 'bottom' | 'left' | 'right' | false
  pad?: string | { horizontal?: string; vertical?: string }
} & React.ComponentProps<typeof Box>

const PanelBox = ({
  children,
  borderSide = 'bottom',
  pad = 'medium',
  ...restProps
}: PanelBoxProps) => {
  const borderProp = borderSide
    ? { side: borderSide, color: 'dark-3' }
    : undefined
  return (
    <Box pad={pad} gap="xsmall" flex="grow" border={borderProp} {...restProps}>
      {children}
    </Box>
  )
}

export default PanelBox
