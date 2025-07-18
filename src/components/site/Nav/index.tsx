import React from 'react'
import { Box, Nav as GrommetNav } from 'grommet'

interface NavItem {
  label: string
  href: string
}

interface NavProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

import { Button } from 'grommet'
import { Rocket } from 'lucide-react'

const Nav: React.FC<NavProps> = ({ items = defaultItems }) => (
  <Box
    direction="row"
    align="center"
    justify="between"
    pad={{ vertical: 'small', horizontal: 'large' }}
    fill="horizontal"
    background="white"
    elevation="small"
    height={{ min: '64px' }}
    border={{ side: 'bottom', color: 'light-1', size: 'xsmall' }}
  >
    <Box width="32px" height="32px" justify="center" align="center">
      <Rocket />
    </Box>
    <Box flex align="center" justify="center">
      <GrommetNav direction="row" gap="medium">
        {items.map((item) => (
          <Button
            key={item.href}
            label={item.label}
            href={item.href}
            style={{ padding: '8px 16px', borderRadius: '4px' }}
          />
        ))}
      </GrommetNav>
    </Box>
    <Box>
      <Button label="Contact US" primary />
    </Box>
  </Box>
)

export default Nav
