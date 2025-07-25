import React, { useState, useRef, useEffect } from 'react'
import { Box } from 'grommet'
import DropDownButton from './DropDownButton'
import DropDownList from './DropDownList'
import type { DropDownProps } from './DropDown.types'

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

  const selectedLabel =
    selected !== defaultValue
      ? options.find((opt) => opt.value === selected)?.label || ''
      : (label ?? options.find((opt) => opt.value === defaultValue)?.label) ||
        ''

  return (
    <Box
      ref={ref}
      direction="row"
      align="center"
      style={{ position: 'relative' }}
    >
      <DropDownButton
        icon={icon}
        label={label}
        selectedLabel={selectedLabel}
        selected={selected}
        defaultValue={defaultValue}
        open={open}
        onToggle={() => setOpen(!open)}
        onClear={() => {
          setOpen(false)
          onSelect(defaultValue)
        }}
      />
      {open && (
        <DropDownList
          options={options}
          selected={selected}
          onSelect={onSelect}
          showCheckmark={showCheckmark}
          setOpen={setOpen}
        />
      )}
    </Box>
  )
}

export default DropDown
