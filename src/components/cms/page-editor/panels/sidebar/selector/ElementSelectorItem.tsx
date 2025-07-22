import { Box, Text } from 'grommet'

export type ElementSelectorItemProps = {
  title: string
  description: string
  preview?: string
}

const ElementSelectorItem: React.FC<ElementSelectorItemProps> = ({
  title,
  preview = 'dark-3',
}) => {
  return (
    <Box gap="xsmall" round="small" flex="grow" margin={{ top: 'xsmall' }}>
      <Box
        overflow="hidden"
        height="130px"
        background={{ image: `url(${preview})` }}
        round="small"
      ></Box>
      <Box gap="xsmall" pad="xsmall">
        <Text size="small" color="light-4">
          {title}
        </Text>
      </Box>
    </Box>
  )
}

export default ElementSelectorItem
