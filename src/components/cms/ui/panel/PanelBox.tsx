// Minimal types to match Grommet's border prop
type BoxSideType = 'top' | 'bottom' | 'left' | 'right'
type BorderProp = { side: BoxSideType; color: string }
import { Box } from 'grommet'

export type PanelBoxProps = {
  children: React.ReactNode
  borderSide?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'vertical'
    | 'horizontal'
    | false
  pad?: string | { horizontal?: string; vertical?: string }
} & React.ComponentProps<typeof Box>

const PanelBox = ({
  children,
  borderSide = 'bottom',
  gap = 'xsmall',
  pad = '16px',
  ...restProps
}: PanelBoxProps) => {
  let borderProp: BorderProp | BorderProp[] | undefined = undefined
  if (borderSide === 'vertical') {
    borderProp = [
      { side: 'top', color: 'dark-2' },
      { side: 'bottom', color: 'dark-2' },
    ]
  } else if (borderSide === 'horizontal') {
    borderProp = [
      { side: 'left', color: 'dark-2' },
      { side: 'right', color: 'dark-2' },
    ]
  } else if (borderSide) {
    borderProp = { side: borderSide as BoxSideType, color: 'dark-2' }
  }
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
