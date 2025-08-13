import { Box, Field, Input } from '@chakra-ui/react'

import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'

const TextEditor = ({ title, value, onChange }: PanelEditorBase) => {
  return (
    <Box mb={4}>
      <Field.Root orientation="horizontal">
        <Field.Label fontSize="xs">{title}</Field.Label>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          variant="subtle"
        />
      </Field.Root>
    </Box>
  )
}

export default TextEditor
