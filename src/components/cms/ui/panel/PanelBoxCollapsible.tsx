import { useState } from 'react'
import type { ReactNode } from 'react'

import PanelBox, { type PanelBoxProps } from './PanelBox'

import { Box, Button, Heading } from 'grommet'
import { ChevronDown } from 'lucide-react'

type PanelCollapsibleProps = {
  title: ReactNode
  children: ReactNode
  collapsedGap?: string
} & PanelBoxProps

const PanelCollapsible = ({
  title,
  children,
  collapsedGap = 'none',
  ...restProps
}: PanelCollapsibleProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <PanelBox focusIndicator={false} pad="none" gap="none" {...restProps}>
      <Box
        direction="row"
        justify="between"
        align="center"
        pad={{
          horizontal: '16px',
          top: '16px',
          bottom: collapsed ? '16px' : 'small',
        }}
        style={{ cursor: 'pointer' }}
        focusIndicator={false}
        onClick={() => setCollapsed((c) => !c)}
      >
        <Heading level={6} size="small" margin="none">
          {title}
        </Heading>
        <Button
          icon={
            <ChevronDown
              size={16}
              style={{
                transform: collapsed ? 'rotate(-90deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            />
          }
          plain
          focusIndicator={false}
        />
      </Box>
      {!collapsed && (
        <Box
          pad={{ top: 'none', horizontal: '16px', bottom: 'medium' }}
          gap={collapsedGap}
        >
          {children}
        </Box>
      )}
    </PanelBox>
  )
}

export default PanelCollapsible
