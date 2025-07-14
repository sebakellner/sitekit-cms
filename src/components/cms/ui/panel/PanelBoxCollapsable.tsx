import { useState } from 'react'
import type { ReactNode } from 'react'

import PanelBox, { type PanelBoxProps } from './PanelBox'

import { Box, Button, Heading } from 'grommet'
import { Down } from 'grommet-icons'

type PanelBoxCollapsableProps = {
  title: ReactNode
  children: ReactNode
} & PanelBoxProps

const PanelBoxCollapsable = ({
  title,
  children,
  ...restProps
}: PanelBoxCollapsableProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <PanelBox focusIndicator={false} pad="none" gap="none" {...restProps}>
      <Box
        direction="row"
        justify="between"
        align="center"
        pad="medium"
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
        <Box pad={{ top: 'none', horizontal: 'medium', bottom: 'large' }}>
          {children}
        </Box>
      )}
    </PanelBox>
  )
}

export default PanelBoxCollapsable
