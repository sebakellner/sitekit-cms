import { Box } from 'grommet'

export type PanelBoxProps = {
  children: React.ReactNode
  borderSide?: 'top' | 'bottom' | 'left' | 'right' | false
  pad?: string | { horizontal?: string; vertical?: string }
} & React.ComponentProps<typeof Box>

const PanelBox = ({
  children,
  borderSide = 'bottom',
  gap = 'xsmall',
  pad = '16px',
  ...restProps
}: PanelBoxProps) => {
  const borderProp = borderSide
    ? { side: borderSide, color: 'dark-2' }
    : undefined
  return (
    <Box
      pad={pad}
      gap={gap}
      flex="grow"
      border={borderProp}
      width="100%"
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default PanelBox
