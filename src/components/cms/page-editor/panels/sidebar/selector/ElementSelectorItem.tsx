import { Box, Heading, Text } from 'grommet'

export type ElementSelectorItemProps = {
  title: string
  description: string
  preview?: string
}

const ElementSelectorItem: React.FC<ElementSelectorItemProps> = ({
  title,
  description,
  preview = 'dark-3',
}) => {
  return (
    <Box
      gap="xsmall"
      round="small"
      margin={{ top: 'small', bottom: 'medium' }}
      flex="grow"
      hoverIndicator={true}
    >
      <Box
        overflow="hidden"
        height="130px"
        background={{ image: `url(${preview})` }}
        round="small"
      ></Box>
      <Box gap="xsmall" pad="xsmall">
        <Heading level={6} size="small" margin="none">
          {title}
        </Heading>
        <Text size="xsmall" color="light-4">
          {description}
        </Text>
      </Box>
    </Box>
  )
}

export default ElementSelectorItem
