import React from 'react'
import { Box, Grid, Text, Anchor, Heading } from 'grommet'
import { Rocket } from 'lucide-react'
import type { FooterProps } from './Footer.schema'

const Footer: React.FC<FooterProps> = ({
  siteName = 'Site Kit Builder',
  year = 2025,
  footerLinks = [],
  background = '#23242a',
}) => (
  <Box
    background={background}
    pad={{ top: 'large', bottom: 'medium', horizontal: 'large' }}
  >
    <Grid
      columns={['auto', 'auto', 'auto', 'auto']}
      gap="large"
      align="start"
      margin={{ bottom: 'large' }}
      responsive
    >
      <Box gap="medium">
        <Rocket size={32} />
        <Text weight="bold" size="large" color="white">
          {siteName}
        </Text>
      </Box>

      {footerLinks.map((col) => (
        <Box key={col.title} gap="xsmall">
          <Heading
            level={4}
            color="white"
            margin={{ bottom: 'small', top: 'none' }}
          >
            {col.title}
          </Heading>
          {col.links.map((link) => (
            <Anchor
              key={link}
              href="#"
              color="white"
              size="medium"
              label={link}
            />
          ))}
        </Box>
      ))}
    </Grid>
    <Box
      border={{ side: 'top', color: 'dark-3' }}
      pad={{ top: 'small' }}
      margin={{ top: 'large' }}
    >
      <Text color="white" size="small">
        © {year} {siteName}. All rights reserved.
      </Text>
    </Box>
  </Box>
)

export default Footer
