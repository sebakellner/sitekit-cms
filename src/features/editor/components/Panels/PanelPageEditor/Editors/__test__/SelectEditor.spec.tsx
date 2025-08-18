import { describe, test, expect } from 'vitest'
import { render } from 'test/utils/render'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectEditor, { type SelectEditorProps } from '../SelectEditor'

const setup = (overrides: Partial<SelectEditorProps> = {}) => {
  const defaultProps: SelectEditorProps = {
    title: 'Sizes',
    value: '#ffffff',
    options: [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
    ],
    onChange: () => {},
  }
  const props = { ...defaultProps, ...overrides }
  return <SelectEditor {...props} />
}

describe('SelectEditor', () => {
  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should call onChange with selected value', async () => {
    const handleChange = vi.fn()
    render(
      setup({
        onChange: handleChange,
      })
    )

    const select = screen.getByRole('combobox', { name: 'Sizes' })
    await userEvent.selectOptions(select, 'Small')

    expect(handleChange).toHaveBeenCalledWith('small')
  })
})
