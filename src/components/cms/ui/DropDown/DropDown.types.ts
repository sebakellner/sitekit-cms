export interface DropDownButtonProps {
  icon?: React.ReactNode
  label?: string
  selectedLabel: string
  selected: string
  defaultValue: string
  open: boolean
  onToggle: () => void
  onClear: () => void
}

export interface DropDownProps {
  options: DropDownOption[]
  selected: string
  onSelect: (value: string) => void
  label?: string
  defaultValue?: string
  icon?: React.ReactNode
  showCheckmark?: boolean
}

export interface DropDownListProps {
  options: DropDownOption[]
  selected: string
  onSelect: (value: string) => void
  showCheckmark: boolean
  setOpen: (open: boolean) => void
}

export type DropDownOption = {
  label: string
  value: string
  icon?: React.ReactNode
  onClick?: () => void
  isDivider?: boolean
}
