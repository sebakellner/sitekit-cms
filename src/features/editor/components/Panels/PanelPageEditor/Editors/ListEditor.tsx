import { Box, Button, Field, Input, Separator, VStack } from '@chakra-ui/react'
import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'
import { Plus } from 'lucide-react'

export type ListItem = Record<
  string,
  string | number | boolean | null | undefined
>

const getDefaultItem = (template: Record<string, any>) => {
  const lorem: Record<string, string> = {
    label: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
  return Object.fromEntries(
    Object.keys(template).map((key) => [key, lorem[key] ?? ''])
  )
}

const ListEditor = ({ value, onChange }: PanelEditorBase<ListItem[]>) => {
  if (!Array.isArray(value)) return null

  const handleChange = (idx: number, key: string, newVal: string) => {
    const updated = value.map((item, i) =>
      i === idx ? { ...item, [key]: newVal } : item
    )
    onChange(updated)
  }

  const handleAdd = () => {
    const newItem = getDefaultItem(value[0])
    onChange([...value, newItem])
  }

  return (
    <VStack align="stretch" gap={1}>
      {value.map((item, idx) => (
        <Box key={idx} mb={2}>
          {Object.entries(item).map(([key, val], idx) => (
            <Field.Root key={idx} mb={3} orientation="horizontal">
              <Field.Label fontSize="xs">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Field.Label>
              <Input
                variant="subtle"
                flex="1"
                value={val == null ? '' : String(val)}
                onChange={(e) => handleChange(idx, key, e.target.value)}
              />
            </Field.Root>
          ))}
          <Separator />
        </Box>
      ))}
      <Button variant="outline" onClick={handleAdd}>
        <Plus />
        Add Item
      </Button>
    </VStack>
  )
}

export default ListEditor
