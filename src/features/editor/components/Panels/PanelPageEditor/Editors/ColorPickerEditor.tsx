import {
  Box,
  ColorPicker,
  Field,
  HStack,
  parseColor,
  Portal,
} from '@chakra-ui/react'

import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'

const ColorPickerEditor = ({ title, value, onChange }: PanelEditorBase) => {
  return (
    <Box mb={3}>
      <Field.Root orientation="horizontal">
        <Field.Label fontSize="xs">{title}</Field.Label>
        <ColorPicker.Root
          value={value ? parseColor(value) : undefined}
          format="rgba"
          onValueChange={(e) => onChange(e.valueAsString)}
          w="100%"
        >
          <ColorPicker.HiddenInput />
          <ColorPicker.Control>
            <ColorPicker.Input />
            <ColorPicker.Trigger />
          </ColorPicker.Control>
          <Portal>
            <ColorPicker.Positioner>
              <ColorPicker.Content>
                <ColorPicker.Area />
                <HStack>
                  <ColorPicker.EyeDropper size="xs" variant="outline" />
                  <ColorPicker.Sliders />
                </HStack>
              </ColorPicker.Content>
            </ColorPicker.Positioner>
          </Portal>
        </ColorPicker.Root>
      </Field.Root>
    </Box>
  )
}

export default ColorPickerEditor
