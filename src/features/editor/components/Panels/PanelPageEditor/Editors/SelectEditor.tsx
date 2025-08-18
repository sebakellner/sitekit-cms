import { Box, Field, NativeSelect } from '@chakra-ui/react'

import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'

export interface SelectEditorProps extends PanelEditorBase<string> {
  options: { label: string; value: string }[]
}

const SelectEditor = ({
  title,
  value,
  onChange,
  options,
}: SelectEditorProps) => {
  return (
    <Box mb={4}>
      <Field.Root orientation="horizontal">
        <Field.Label fontSize="xs">{title}</Field.Label>
        <NativeSelect.Root size="sm" width="240px" variant="subtle">
          <NativeSelect.Field
            value={value}
            onChange={(e) => onChange((e.target as HTMLSelectElement).value)}
          >
            {options.map(({ value, label }, key) => (
              <option key={key} value={value}>
                {label}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>
    </Box>
  )
}

export default SelectEditor
