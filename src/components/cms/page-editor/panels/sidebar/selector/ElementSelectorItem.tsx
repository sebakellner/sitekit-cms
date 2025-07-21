import { Box, Heading, Text } from 'grommet'

export type ElementSelectorItemProps = {
  title: string
  description: string
  previewBg?: string
}

const ElementSelectorItem: React.FC<ElementSelectorItemProps> = ({
  title,
  description,
  previewBg = 'dark-3',
}) => {
  return (
    <Box gap="small" round="small" flex="grow" hoverIndicator={true}>
      <Box
        overflow="hidden"
        height="130px"
        background={previewBg}
        round="small"
      ></Box>
      <Box gap="xsmall">
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
