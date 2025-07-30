import { PanelBox } from '../PanelBox'
import type { PanelWrapperProps } from './PanelWrapper.types'

const PanelWrapper = ({
  children,
  borderSide = 'right',
  ...rest
}: PanelWrapperProps) => {
  return (
    <PanelBox
      borderSide={borderSide}
      gap={0}
      p={0}
      bg="gray.900"
      align="center"
      {...rest}
    >
      {children}
    </PanelBox>
  )
}

export default PanelWrapper
