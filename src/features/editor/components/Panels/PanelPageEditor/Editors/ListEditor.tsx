import { Box, Button, Field, Input, Separator, VStack } from '@chakra-ui/react'
import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'
import { Plus } from 'lucide-react'

export type ListItem = Record<
  string,
  string | number | boolean | null | undefined
>

const getDefaultItem = (template: Record<string, unknown>) => {
  return Object.fromEntries(Object.keys(template).map((key) => [key, '']))
}

const ListEditor = ({ value, onChange }: PanelEditorBase<ListItem[]>) => {
  if (!Array.isArray(value)) return null

  const handleChange = (
    idOrIdx: string | number,
    key: string,
    newVal: string
  ) => {
    const updated = value.map((item, i) =>
      item.id === idOrIdx || i === idOrIdx ? { ...item, [key]: newVal } : item
    )
    onChange(updated)
  }

  const handleAdd = () => {
    const newItem = getDefaultItem(value.length > 0 ? value[0] : {})
    onChange([...value, newItem])
  }

  const getItemKey = (item: ListItem, idx: number): string | number =>
    typeof item.id === 'string' || typeof item.id === 'number' ? item.id : idx

  return (
    <VStack align="stretch" gap={1}>
      {value.map((item, idx) => (
        <Box key={getItemKey(item, idx)} mb={2}>
          {Object.entries(item).map(([key, val]) => (
            <Field.Root key={key} mb={3} orientation="horizontal">
              <Field.Label fontSize="xs">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Field.Label>
              <Input
                variant="subtle"
                flex="1"
                value={val == null ? '' : String(val)}
                onChange={(e) =>
                  handleChange(getItemKey(item, idx), key, e.target.value)
                }
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
