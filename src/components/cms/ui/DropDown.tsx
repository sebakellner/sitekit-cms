import React, { useState, useRef, useEffect } from 'react'
import { Box, Text } from 'grommet'
import { Checkmark, Down, Close } from 'grommet-icons'

export type DropDownOption = {
  label: string
  value: string
  icon?: React.ReactNode
  onClick?: () => void
  isDivider?: boolean
}

interface DropDownProps {
  options: DropDownOption[]
  selected: string
  onSelect: (value: string) => void
  label?: string
  defaultValue?: string
  icon?: React.ReactNode
  showCheckmark?: boolean
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  selected,
  onSelect,
  label,
  defaultValue = '',
  icon,
  showCheckmark = true,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <Box
      ref={ref}
      direction="row"
      align="center"
      style={{ position: 'relative' }}
    >
      <Box
        direction="row"
        align="center"
        justify="center"
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
        round="xsmall"
        width="100%"
        background={
          open || selected !== defaultValue
            ? 'rgba(255, 255, 255, 0.06)'
            : undefined
        }
        style={{
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={() => setOpen(!open)}
        hoverIndicator
        focusIndicator={false}
      >
        {icon && icon}
        <Text
          margin={{ left: 'xsmall', right: 'small' }}
          size="small"
          style={{
            maxWidth: 140,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'block',
          }}
        >
          {selected !== defaultValue
            ? options.find((opt) => opt.value === selected)?.label
            : (label ??
              options.find((opt) => opt.value === defaultValue)?.label)}
        </Text>
        {selected === defaultValue && <Down size="12px" />}
        {selected !== defaultValue && (
          <Box
            align="center"
            border={{ side: 'left', color: 'dark-1' }}
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
              onSelect(defaultValue)
            }}
            style={{
              marginLeft: 8,
              cursor: 'pointer',
            }}
          >
            <Close size="12px" />
          </Box>
        )}
      </Box>
      {open && (
        <Box
          background="dark-1"
          round="xsmall"
          border={{ color: 'dark-2', size: 'xsmall' }}
          elevation="medium"
          pad={{ vertical: 'xsmall' }}
          style={{
            position: 'absolute',
            top: '120%',
            left: 0,
            zIndex: 10,
            minWidth: 220,
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
                style={{ cursor: 'pointer' }}
              >
                {showCheckmark && selected === opt.value && (
                  <Box
                    width="16px"
                    height="16px"
                    align="center"
                    justify="center"
                  >
                    <Checkmark size="12px" style={{ marginRight: 8 }} />
                  </Box>
                )}
                {opt.icon && <Box>{opt.icon}</Box>}
                <Text size="small">{opt.label}</Text>
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  )
}

export default DropDown
