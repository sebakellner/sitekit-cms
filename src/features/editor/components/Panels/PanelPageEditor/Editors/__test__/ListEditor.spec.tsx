import { describe, test, expect } from 'vitest'
import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'
import ListEditor, { type ListItem } from '../ListEditor'
import { render } from 'test/utils/render'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useState } from 'react'

const setup = (overrides: Partial<PanelEditorBase<ListItem[]>> = {}) => {
  const defaultProps: PanelEditorBase<ListItem[]> = {
    title: 'Color Picker',
    value: [{ id: '1', label: 'Item 1' }],
    onChange: () => {},
  }
  const props = { ...defaultProps, ...overrides }

  const ControlledListEditor = () => {
    const [value, setValue] = useState(props.value)
    const handleChange = (newValue: ListItem[]) => {
      setValue(newValue)
      props.onChange(newValue)
    }
    return <ListEditor {...props} value={value} onChange={handleChange} />
  }

  return <ControlledListEditor />
}

describe('ListEditor', () => {
  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should handle empty list', () => {
    render(setup({ value: [] }))
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  test('should call onChange with updated list when item is added', async () => {
    const handleChange = vi.fn()
    render(
      setup({
        onChange: handleChange,
      })
    )

    const AddItemBtn = screen.getByRole('button', { name: /Add Item/i })
    expect(AddItemBtn).toBeInTheDocument()

    await userEvent.click(AddItemBtn)

    const labelInputs = screen.getAllByLabelText('Label')
    const newLabelInput = labelInputs[labelInputs.length - 1]

    expect(newLabelInput).toHaveValue('')

    await userEvent.clear(newLabelInput)
    await userEvent.type(newLabelInput, 'Item 2')
    await userEvent.tab()

    await waitFor(() => {
      const calls = handleChange.mock.calls
      expect(calls[calls.length - 1][0]).toEqual([
        { id: '1', label: 'Item 1' },
        { id: '', label: 'Item 2' },
      ])
    })
  })
  test('should call onChange with updated list when item is modified', async () => {
    const handleChange = vi.fn()
    render(
      setup({ value: [{ id: '1', label: 'Item 1' }], onChange: handleChange })
    )
    const labelInput = screen.getByLabelText('Label')
    expect(labelInput).toHaveValue('Item 1')

    await userEvent.clear(labelInput)
    await userEvent.type(labelInput, 'Updated Item 1')
    await userEvent.tab()

    await waitFor(() => {
      const calls = handleChange.mock.calls
      expect(calls[calls.length - 1][0]).toEqual([
        { id: '1', label: 'Updated Item 1' },
      ])
    })
  })
  test('should not crash if value is not an array', () => {
    const { container } = render(setup({ value: undefined }))
    expect(container).toMatchSnapshot()
  })
  test('should handle list items without id field', async () => {
    const handleChange = vi.fn()
    render(
      setup({
        value: [{ label: 'Item 1' }],
        onChange: handleChange,
      })
    )

    const labelInput = screen.getByLabelText('Label')
    expect(labelInput).toHaveValue('Item 1')

    await userEvent.clear(labelInput)
    await userEvent.type(labelInput, 'Updated Item 1')
    await userEvent.tab()

    await waitFor(() => {
      const calls = handleChange.mock.calls
      expect(calls[calls.length - 1][0]).toEqual([{ label: 'Updated Item 1' }])
    })
  })
  test('should render input with empty string if value is null', () => {
    render(setup({ value: [{ id: '1', label: null }] }))
    const labelInput = screen.getByLabelText('Label')
    expect(labelInput).toHaveValue('')
  })

  test('should render input with empty string if value is undefined', () => {
    render(setup({ value: [{ id: '1', label: undefined }] }))
    const labelInput = screen.getByLabelText('Label')
    expect(labelInput).toHaveValue('')
  })

  test('should add item with same fields as first item when list is not empty', async () => {
    render(setup({ value: [{ id: '1', label: 'Item 1', extra: 'foo' }] }))

    const AddItemBtn = screen.getByRole('button', { name: /Add Item/i })
    await userEvent.click(AddItemBtn)

    const labelInputs = screen.getAllByLabelText('Label')
    expect(labelInputs.length).toBe(2)
    expect(labelInputs[1]).toHaveValue('')

    const extraInputs = screen.getAllByLabelText('Extra')
    expect(extraInputs.length).toBe(2)
    expect(extraInputs[1]).toHaveValue('')
  })
  test('should add item with empty fields when list is empty', async () => {
    render(setup({ value: [] }))

    const AddItemBtn = screen.getByRole('button', { name: /Add Item/i })
    await userEvent.click(AddItemBtn)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
})
