import { PanelBox } from '../PanelBox'
import type { PanelBoxScrollProps } from './PanelBoxScroll.types'

const PanelBoxScroll = ({
  children,
  p = 0,
  gap = 4,
  ...restProps
}: PanelBoxScrollProps) => {
  return (
    <PanelBox
      p={p}
      gap={gap}
      w="100%"
      overflowY="auto"
      overflowX="hidden"
      className="custom-scrollbar"
      borderSide={false}
      {...restProps}
    >
      {children}
    </PanelBox>
  )
}

export default PanelBoxScroll
