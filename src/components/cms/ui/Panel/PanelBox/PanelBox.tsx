import { Flex } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import type { PanelBoxProps } from './PanelBox.types'

const DEFAULT_BORDER_COLOR = 'gray.600'

const borderMap: Record<
  Exclude<NonNullable<PanelBoxProps['borderSide']>, 'none'>,
  Partial<FlexProps>
> = {
  top: { borderTop: '1px solid', borderTopColor: DEFAULT_BORDER_COLOR },
  bottom: {
    borderBottom: '1px solid',
    borderBottomColor: DEFAULT_BORDER_COLOR,
  },
  left: { borderLeft: '1px solid', borderLeftColor: DEFAULT_BORDER_COLOR },
  right: { borderRight: '1px solid', borderRightColor: DEFAULT_BORDER_COLOR },
  vertical: {
    borderTop: '1px solid',
    borderTopColor: DEFAULT_BORDER_COLOR,
    borderBottom: '1px solid',
    borderBottomColor: DEFAULT_BORDER_COLOR,
  },
  horizontal: {
    borderLeft: '1px solid',
    borderLeftColor: DEFAULT_BORDER_COLOR,
    borderRight: '1px solid',
    borderRightColor: DEFAULT_BORDER_COLOR,
  },
}

const PanelBox = ({
  borderSide = 'bottom',
  pad = 4,
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
