import { Box, Field, Input } from '@chakra-ui/react'

const TextEditor = ({
  title,
  value,
  onChange,
}: {
  title: string
  value: string
  onChange: (val: string) => void
}) => {
  return (
    <Box mb={4}>
      <Field.Root>
        <Field.Label>{title}</Field.Label>
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
