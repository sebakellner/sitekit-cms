import React from 'react'
import { Box, Heading, Text, Image } from 'grommet'
import type { InfoTextProps } from './InfoText.schema'

const InfoText: React.FC<InfoTextProps> = ({
  title = 'Lorem ipsum dolor sit amet',
  text = 'Consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.',
  formats = [],
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
