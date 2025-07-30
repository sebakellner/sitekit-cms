import { Flex } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import type { PanelBoxProps } from './PanelBox.types'

const borderColorMap: Record<string, string> = {
  'dark-2': 'gray.600',
}

const PanelBox = ({
  borderSide = 'bottom',
  pad = 4,
  gap = 3,
  children,
  ...restProps
}: PanelBoxProps) => {
  const color = borderColorMap['dark-2']
  const borderProps: Partial<FlexProps> = {}

  const setBorder = (side: string) => {
    borderProps[`${side}Width` as keyof FlexProps] = '1px'
    borderProps[`${side}Style` as keyof FlexProps] = 'solid'
    borderProps[`${side}Color` as keyof FlexProps] = color
  }

  if (borderSide === 'vertical') {
    setBorder('borderTop')
    setBorder('borderBottom')
  } else if (borderSide === 'horizontal') {
    setBorder('borderLeft')
    setBorder('borderRight')
  } else if (
    borderSide === 'top' ||
    borderSide === 'bottom' ||
    borderSide === 'left' ||
    borderSide === 'right'
  ) {
    setBorder(
      `border${borderSide.charAt(0).toUpperCase() + borderSide.slice(1)}`
    )
  }

  return (
    <Flex
      direction="column"
      w="100%"
      p={pad}
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
