import { useState } from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'

import { PanelBox } from '../PanelBox'
import type { PanelBoxCollapsibleProps } from './PanelBoxCollapsible.types'

const PanelCollapsible = ({
  title,
  children,
  collapsedGap = 'none',
  ...restProps
}: PanelBoxCollapsibleProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <PanelBox p={0} gap="none" {...restProps}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        pt={2}
        pb={collapsed ? 2 : 2}
        cursor="pointer"
        onClick={() => setCollapsed((c) => !c)}
      >
        <Heading as="h6" size="sm" m={0}>
          {title}
        </Heading>
        <Button variant="ghost" p={0} minW={0}>
          <ChevronDown
            size={16}
            style={{
              transform: collapsed ? 'rotate(-90deg)' : 'none',
              transition: 'transform 0.2s',
            }}
          />
        </Button>
      </Box>
      {!collapsed && (
        <Box pt={0} px={4} pb={4} gap={collapsedGap}>
          {children}
        </Box>
      )}
    </PanelBox>
  )
}

export default PanelCollapsible
