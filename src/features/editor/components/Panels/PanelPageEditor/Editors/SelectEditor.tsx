import { Box, Field, NativeSelect } from '@chakra-ui/react'

const SelectEditor = ({
  title,
  value,
  onChange,
  options,
}: {
  title: string
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
}) => {
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
