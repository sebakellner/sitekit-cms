import { Box, Text } from 'grommet'

import { SUPPORTED_IMAGE_EXTENSIONS } from '@constants/image'

export type ElementSelectorItemProps = {
  title: string
  description?: string
  preview?: string
}

const isImageUrl = (url: string): boolean => {
  return (
    url.startsWith('data:') ||
    SUPPORTED_IMAGE_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(ext))
  )
}

const ElementSelectorItem: React.FC<ElementSelectorItemProps> = ({
  title,
  preview = '',
  description = '',
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
        <Text size="small" color="light-4" weight="bold">
          {title}
        </Text>
        <Text size="small" color="light-4" truncate>
          {description}
        </Text>
      </Box>
    </Box>
  )
}

export default ElementSelectorItem
