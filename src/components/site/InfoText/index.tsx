import React from 'react'
import { Box, Heading, Text, Image } from 'grommet'

export type FormatItem = {
  label: string
  description: string
}

export type InfoTextProps = {
  title?: string
  text?: string
  formats?: FormatItem[]
  imageSrc?: string
  imageAlt?: string
  background?: string
}

const defaultFormats: FormatItem[] = [
  {
    label: 'Lorem ipsum dolor',
    description: 'Sit amet, consectetur adipiscing elit.',
  },
  {
    label: 'Sed do eiusmod',
    description: 'Tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    label: 'Ut enim ad minim',
    description: 'Veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    label: 'Duis aute irure',
    description: 'Dolor in reprehenderit in voluptate velit esse.',
  },
  {
    label: 'Excepteur sint occaecat',
    description: 'Cupidatat non proident, sunt in culpa qui officia.',
  },
]

const InfoText: React.FC<InfoTextProps> = ({
  title = 'Lorem ipsum dolor sit amet',
  text = 'Consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.',
  formats = defaultFormats,
  imageSrc = 'https://picsum.photos/id/42/340/340',
  imageAlt = 'Learning formats preview',
  background = 'white',
}) => (
  <Box
    as="section"
    direction="row-responsive"
    gap="large"
    align="center"
    justify="center"
    pad={{ vertical: 'xlarge', horizontal: 'large' }}
    background={background}
  >
    <Box width="60%">
      <Heading
        level={2}
        weight="bold"
        margin={{ bottom: 'small', top: 'none' }}
      >
        {title}
      </Heading>
      <Text size="large" margin={{ bottom: 'medium' }}>
        {text}
      </Text>
      <Box as="ul" pad={{ left: 'small' }}>
        {formats.map((f) => (
          <Box
            as="li"
            direction="row"
            gap="xsmall"
            key={f.label}
            margin={{ bottom: 'xsmall' }}
          >
            <Box as="span" color="accent-1" margin={{ top: '4px' }}>
              &#8226;
            </Box>
            <Text>
              <Text weight="bold">{f.label}:</Text> {f.description}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
    <Box width="340px" height="340px" round overflow="hidden" flex={false}>
      <Image
        src={imageSrc}
        fit="cover"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt={imageAlt}
      />
    </Box>
  </Box>
)

export default InfoText
