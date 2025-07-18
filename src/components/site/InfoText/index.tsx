import React from 'react'
import { Box, Heading, Text, Image, Anchor } from 'grommet'

const formats = [
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

const InfoText: React.FC = () => (
  <Box
    as="section"
    direction="row-responsive"
    gap="large"
    align="start"
    justify="between"
    pad={{ vertical: 'xlarge', horizontal: 'large' }}
  >
    <Box width="60%">
      <Heading
        level={2}
        weight="bold"
        margin={{ bottom: 'small', top: 'none' }}
      >
        Lorem ipsum dolor sit amet
      </Heading>
      <Text size="large" margin={{ bottom: 'medium' }}>
        Consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.
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
      <Text size="xsmall" margin={{ top: 'medium' }}>
        Lorem ipsum <Anchor href="#" label="dolor sit amet" weight="bold" />,
        consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur,
        facilisis.
      </Text>
    </Box>
    <Box width="340px" height="340px" round overflow="hidden" flex={false}>
      <Image
        src="https://picsum.photos/id/42/340/340"
        fit="cover"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt="Learning formats preview"
      />
    </Box>
  </Box>
)

export default InfoText
