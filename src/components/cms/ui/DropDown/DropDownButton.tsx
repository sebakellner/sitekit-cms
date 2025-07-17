import React from 'react'
import { Box, Text } from 'grommet'
import { Down, Close } from 'grommet-icons'

interface DropDownButtonProps {
  icon?: React.ReactNode
  label?: string
  selectedLabel: string
  selected: string
  defaultValue: string
  open: boolean
  onToggle: () => void
  onClear: () => void
}

const DropDownButton: React.FC<DropDownButtonProps> = ({
  icon,
  selectedLabel,
  selected,
  defaultValue,
  open,
  onToggle,
  onClear,
}) => (
  <Box
    direction="row"
    align="center"
    justify="center"
    pad={{ horizontal: 'small', vertical: 'xsmall' }}
    round="xsmall"
    width={{ min: '100px', max: '200px' }}
    background={
      open || selected !== defaultValue
        ? 'rgba(255, 255, 255, 0.06)'
        : undefined
    }
    onClick={onToggle}
    hoverIndicator
    focusIndicator={false}
  >
    {icon}
    <Text margin={{ left: 'xsmall', right: 'small' }} size="small" truncate>
      {selectedLabel}
    </Text>
    {selected === defaultValue && <Down size="12px" />}
    {selected !== defaultValue && (
      <Box
        align="center"
        margin={{ left: 'xsmall' }}
        onClick={(e) => {
          e.stopPropagation()
          onClear()
        }}
      >
        <Close size="12px" />
      </Box>
    )}
  </Box>
)

export default DropDownButton
