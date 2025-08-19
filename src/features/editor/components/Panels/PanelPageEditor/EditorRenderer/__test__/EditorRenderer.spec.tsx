import { expect, describe, test } from 'vitest'
import { render } from 'test/utils/render'
import EditorRenderer from '../EditorRenderer'
import type { EditorRendererProps } from '../EditorRenderer.types'
import { screen } from '@testing-library/react'
import type { ComponentPropEditorType } from '@features/editor/schemas/componentPropEditor.schema'

const setup = (overrides: Partial<EditorRendererProps> = {}) => {
  const defaultProps: EditorRendererProps = {
    config: {
      title: 'Property 1',
      type: 'string',
      editor: 'text',
      default: 'Default Value',
    },
    value: undefined,
    onChange: () => {},
  }
  const props = { ...defaultProps, ...overrides }
  return <EditorRenderer {...props} />
}

describe('EditorRenderer', () => {
  test('renders TextEditor with default value', () => {
    render(setup())
    const input = screen.getByRole('textbox', { name: 'Property 1' })
    expect(input).toHaveValue('Default Value')
  })

  test('renders TextEditor with provided value', () => {
    render(setup({ value: 'Custom Value' }))
    const input = screen.getByRole('textbox', { name: 'Property 1' })
    expect(input).toHaveValue('Custom Value')
  })

  test('renders SelectEditor with options and default', () => {
    render(
      setup({
        config: {
          title: 'Property 1',
          type: 'enum',
          editor: 'select',
          default: 'opt2',
          options: [
            { label: 'Option 1', value: 'opt1' },
            { label: 'Option 2', value: 'opt2' },
          ],
        },
      })
    )
    const select = screen.getByRole('combobox', { name: 'Property 1' })
    expect(select).toHaveValue('opt2')
    expect(select).toHaveDisplayValue('Option 2')
  })

  test('renders SelectEditor with provided value', () => {
    render(
      setup({
        value: 'opt1',
        config: {
          title: 'Property 1',
          type: 'enum',
          editor: 'select',
          default: 'opt2',
          options: [
            { label: 'Option 1', value: 'opt1' },
            { label: 'Option 2', value: 'opt2' },
          ],
        },
      })
    )
    const select = screen.getByRole('combobox', { name: 'Property 1' })
    expect(select).toHaveValue('opt1')
    expect(select).toHaveDisplayValue('Option 1')
  })

  test('renders ColorPickerEditor with default value', () => {
    render(
      setup({
        config: {
          title: 'Color',
          type: 'string',
          editor: 'colorPicker',
          default: '#fff',
        },
      })
    )
    expect(screen.getByLabelText('Color')).toBeInTheDocument()
  })

  test('renders ListEditor with array value', () => {
    render(
      setup({
        config: {
          title: 'List',
          type: 'enum',
          editor: 'listEditor',
          default: [{ label: 'Item 1' }],
        },
        value: [{ label: 'Item 2' }],
      })
    )
    expect(screen.getByDisplayValue('Item 2')).toBeInTheDocument()
  })

  test('renders nothing for unknown editor', () => {
    render(
      setup({
        config: {
          title: 'Unknown',
          type: 'string',
          editor: 'unknown-editor' as unknown as ComponentPropEditorType,
          default: 'Default',
        },
      })
    )
    expect(screen.queryByText('Unknown')).not.toBeInTheDocument()
  })

  test('renders default title if config.title is not defined', () => {
    render(
      setup({
        config: {
          title: undefined,
          type: 'string',
          editor: 'text',
          default: 'Default Value',
        },
      })
    )
    expect(screen.getByText('Property')).toBeInTheDocument()
  })

  test('should match snapshot for TextEditor', () => {
    const { container } = render(
      setup({
        config: {
          title: 'Text',
          type: 'string',
          editor: 'text',
          default: 'Default',
        },
      })
    )
    expect(container).toMatchSnapshot()
  })

  test('should match snapshot for SelectEditor', () => {
    const { container } = render(
      setup({
        config: {
          title: 'Select',
          type: 'enum',
          editor: 'select',
          default: 'opt1',
          options: [{ label: 'Option 1', value: 'opt1' }],
        },
      })
    )
    expect(container).toMatchSnapshot()
  })

  test('should render the component with the correct props', () => {
    render(
      setup({
        config: {
          title: 'Property 1',
          type: 'string',
          editor: 'text',
          default: 'Default Value',
        },
      })
    )
    expect(screen.getByText('Property 1')).toBeInTheDocument()
  })

  test('should render empty string if value its not a stringu in TextEditor', () => {
    render(
      setup({
        value: 123,
        config: {
          title: 'Property',
          type: 'string',
          editor: 'text',
          default: 'Default value',
        },
      })
    )
    const input = screen.getByRole('textbox', { name: 'Property' })
    expect(input).toHaveValue('')
  })

  test('should render empty array if value is not an array in ListEditor', () => {
    render(
      setup({
        value: 'not-an-array',
        config: {
          title: 'List',
          type: 'enum',
          editor: 'listEditor',
          default: [{ label: 'Item 1' }],
        },
      })
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should render empty options if options are not provided in SelectEditor', () => {
    render(
      setup({
        config: {
          title: 'Select',
          type: 'enum',
          editor: 'select',
          default: undefined,
          options: undefined,
        },
      })
    )
    const select = screen.getByRole('combobox', { name: 'Select' })
    expect(select).toBeInTheDocument()
    expect(select.querySelectorAll('option').length).toBe(0)
  })

  test('should not render editor if config.editor is not defined', () => {
    render(
      setup({
        config: {
          title: 'Property 1',
          type: 'string',
          editor: undefined as unknown as ComponentPropEditorType,
          default: 'Default Value',
        },
      })
    )
    expect(screen.queryByText('Property 1')).not.toBeInTheDocument()
  })
})
