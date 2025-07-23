import { Box, Text } from 'grommet'

export type ElementSelectorItemProps = {
  title: string
  description: string
  preview?: string
}

const SUPPORTED_IMAGE_EXTENSIONS = ['.png', '.jpg']

const isImageUrl = (url: string): boolean => {
  return (
    url.startsWith('data:') ||
    SUPPORTED_IMAGE_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(ext))
  )
}

const ElementSelectorItem: React.FC<ElementSelectorItemProps> = ({
  title,
  preview,
}) => {
  const hasImage = preview && isImageUrl(preview)

  const previewBackground = hasImage
    ? { image: `url(${preview})` }
    : { color: 'dark-3' }

  return (
    <Box
      gap="xsmall"
      round="small"
      flex="grow"
      margin={{ top: 'xsmall' }}
      hoverIndicator
    >
      <Box
        overflow="hidden"
        height="130px"
        background={previewBackground}
        round="small"
      />
      <Box gap="xsmall" pad="xsmall">
        <Text size="small" color="light-4">
          {title}
        </Text>
      </Box>
    </Box>
  )
}

export default ElementSelectorItem
