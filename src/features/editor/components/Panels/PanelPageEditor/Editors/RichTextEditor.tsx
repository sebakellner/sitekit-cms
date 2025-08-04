import { Box, Field, Textarea } from '@chakra-ui/react'

const RichTextEditor = ({
  title,
  value,
  onChange,
}: {
  title: string
  value: string
  onChange: (val: string) => void
}) => {
  return (
    <Box>
      <Field.Root>
        <Field.Label>{title}</Field.Label>
        <Textarea value={value} onChange={(e) => onChange(e.target.value)} />
      </Field.Root>
    </Box>
  )
}

export default RichTextEditor
