import { useState } from 'react'
import type { ReactNode } from 'react'

import PanelBox, { type PanelBoxProps } from './PanelBox'

import { Box, Button, Heading } from 'grommet'
import { Down } from 'grommet-icons'

type PanelCollapsibleProps = {
  title: ReactNode
  children: ReactNode
} & PanelBoxProps

const PanelCollapsible = ({
  title,
  children,
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
          horizontal: 'medium',
          top: 'medium',
          bottom: collapsed ? 'medium' : 'small',
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
            <Down
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
        <Box pad={{ top: 'none', horizontal: 'medium', bottom: 'medium' }}>
          {children}
        </Box>
      )}
    </PanelBox>
  )
}

export default PanelCollapsible
