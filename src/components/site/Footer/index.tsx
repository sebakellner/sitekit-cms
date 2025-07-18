import React from 'react'
import { Box, Grid, Text, Anchor, Heading } from 'grommet'
import { Rocket } from 'lucide-react'

const footerLinks = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'FAQ'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms'],
  },
]

const Footer: React.FC = () => (
  <Box
    background="#23242a"
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
          Site Kit Builder
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
        © 2025 Site Kit Builder. All rights reserved.
      </Text>
    </Box>
  </Box>
)

export default Footer
