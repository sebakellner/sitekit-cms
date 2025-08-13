import { Box, Field, NativeSelect } from '@chakra-ui/react'

import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'

export interface SelectEditorProps extends PanelEditorBase {
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
            {options.map((option, key) => (
              <option key={key} value={option.value}>
                {option.label}
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
