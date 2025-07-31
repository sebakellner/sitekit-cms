import { Flex } from '@chakra-ui/react'

import type { PanelBoxProps } from './PanelBox.types'
import { borderMap } from './PanelBox.constants'

const PanelBox = ({
  borderSide = 'bottom',
  p = 4,
  gap = 3,
  children,
  ...restProps
}: PanelBoxProps) => {
  const borderProps =
    borderSide !== 'none' && borderSide in borderMap
      ? borderMap[borderSide]
      : {}

  return (
    <Flex
      direction="column"
      background={'gray.900'}
      w="100%"
      p={p}
      gap={gap}
      {...borderProps}
      {...restProps}
      data-testid="panel-box"
    >
      {children}
    </Flex>
  )
}

export default PanelBox
