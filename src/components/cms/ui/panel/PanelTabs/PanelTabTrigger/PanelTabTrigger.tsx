import { Box, Text } from 'grommet'
import type { FC } from 'react'
import './PanelTabTrigger.style.css'
import type { PanelTabTriggerProps } from './PanelTabTrigger.types'

const PanelTabTrigger: FC<PanelTabTriggerProps> = ({
  icon,
  label,
  value,
  active,
  setActiveValue,
}) => {
  return (
    <Box
      align="center"
      justify="center"
      gap="xsmall"
      hoverIndicator={true}
      fill
      pad={{ horizontal: 'small', vertical: 'small' }}
      focusIndicator={false}
      className={active ? 'panel-tab-trigger--active' : 'panel-tab-trigger'}
      onClick={() => setActiveValue?.(value)}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      {icon}
      <Text size="small" margin="none">
        {label}
      </Text>
    </Box>
  )
}

export default PanelTabTrigger
