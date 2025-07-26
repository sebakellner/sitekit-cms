import React from 'react'
import { Box, Nav as GrommetNav, Button } from 'grommet'
import { Rocket } from 'lucide-react'
import type { NavProps } from './Nav.schema'

const Nav: React.FC<NavProps & { Icon?: React.ElementType }> = ({
  items = [],
  background = 'white',
  buttonLabel = 'Contact US',
  Icon = Rocket,
}) => (
  <Box
    direction="row"
    align="center"
    justify="between"
    pad={{ vertical: 'small', horizontal: 'large' }}
    fill="horizontal"
    background={background}
    elevation="small"
    height={{ min: '64px' }}
    border={{ side: 'bottom', color: 'light-1', size: 'xsmall' }}
  >
    <Box width="32px" height="32px" justify="center" align="center">
      <Icon />
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
      <Button label={buttonLabel} primary />
    </Box>
  </Box>
)

export default Nav
