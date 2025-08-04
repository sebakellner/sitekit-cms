import {
  Box,
  ColorPicker,
  Field,
  HStack,
  parseColor,
  Portal,
} from '@chakra-ui/react'

const ColorPickerEditor = ({
  title,
  value,
  onChange,
}: {
  title: string
  value: string
  onChange: (val: string) => void
}) => {
  const safeValue =
    typeof value === 'string' && value.match(/^#([0-9a-fA-F]{3}){1,2}$/)
      ? value
      : '#ffffff'

  return (
    <Box>
      <Field.Root>
        <Field.Label>{title}</Field.Label>
        <ColorPicker.Root
          value={parseColor(safeValue)}
          onValueChange={(e) => onChange(e.toString())}
        >
          <ColorPicker.HiddenInput />
          <ColorPicker.Label>Color</ColorPicker.Label>
          <ColorPicker.Control>
            <ColorPicker.Trigger px="2">
              <ColorPicker.ValueSwatch boxSize="6" />
              <ColorPicker.ValueText minW="160px" />
            </ColorPicker.Trigger>
          </ColorPicker.Control>
          <Portal>
            <ColorPicker.Positioner>
              <ColorPicker.Content>
                <ColorPicker.Area />
                <HStack>
                  <ColorPicker.EyeDropper size="sm" variant="outline" />
                  <ColorPicker.Sliders />
                  <ColorPicker.ValueSwatch />
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
