import { Box, Text } from '@chakra-ui/react'
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
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      w="100%"
      px={2}
      py={2}
      className={active ? 'panel-tab-trigger--active' : 'panel-tab-trigger'}
      onClick={() => setActiveValue?.(value)}
      cursor="pointer"
      position="relative"
    >
      {icon}
      <Text fontSize="sm" m={0}>
        {label}
      </Text>
    </Box>
  )
}

export default PanelTabTrigger
