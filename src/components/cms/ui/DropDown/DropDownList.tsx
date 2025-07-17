import React from 'react'
import { Box, Text } from 'grommet'
import { Checkmark } from 'grommet-icons'
import type { DropDownOption } from './DropDownOption'

interface DropDownListProps {
  options: DropDownOption[]
  selected: string
  onSelect: (value: string) => void
  showCheckmark: boolean
  setOpen: (open: boolean) => void
}

const DropDownList: React.FC<DropDownListProps> = ({
  options,
  selected,
  onSelect,
  showCheckmark,
  setOpen,
}) => (
  <Box
    background="dark-1"
    round="xsmall"
    border={{ color: 'dark-2', size: 'xsmall' }}
    elevation="medium"
    width={{ min: '220px', max: '300px' }}
    pad={{ vertical: 'xsmall' }}
    style={{
      position: 'absolute',
      top: '120%',
      left: 0,
      zIndex: 10,
    }}
  >
    {options.map((opt, idx) =>
      opt.isDivider ? (
        <Box
          key={idx}
          border={{ side: 'bottom', color: 'dark-3' }}
          margin={{ vertical: 'xsmall' }}
        />
      ) : (
        <Box
          key={opt.value}
          direction="row"
          align="center"
          pad={{ horizontal: 'small', vertical: 'xsmall' }}
          gap={opt.icon ? 'small' : undefined}
          background={selected === opt.value ? 'dark-3' : undefined}
          focusIndicator={false}
          hoverIndicator={selected !== opt.value}
          onClick={() => {
            setOpen(false)
            onSelect(opt.value)
            if (opt.onClick) opt.onClick()
          }}
        >
          {showCheckmark && selected === opt.value && (
            <Box width="16px" height="16px" align="center" justify="center">
              <Checkmark size="12px" margin={{ right: 'xsmall' }} />
            </Box>
          )}
          {opt.icon && <Box>{opt.icon}</Box>}
          <Text size="small">{opt.label}</Text>
        </Box>
      )
    )}
  </Box>
)

export default DropDownList
