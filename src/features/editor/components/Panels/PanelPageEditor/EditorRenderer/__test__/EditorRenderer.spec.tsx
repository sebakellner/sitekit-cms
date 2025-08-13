import { expect, describe, test } from 'vitest'
import { render } from 'test/utils/render'
import EditorRenderer from '../EditorRenderer'
import type { EditorRendererProps } from '../EditorRenderer.types'
import { screen } from '@testing-library/react'

const setup = (overrides: Partial<EditorRendererProps> = {}) => {
  const defaultProps: EditorRendererProps = {
    config: mockComponentMetadata.props.prop1,
    value: mockValues.prop1,
    onChange: () => {},
  }
  const props = { ...defaultProps, ...overrides }
  return <EditorRenderer {...props} />
}

describe('EditorPanelRenderer', () => {
  test('should render the component with the correct metadata', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should render the component with the correct props', () => {
    render(setup())
    expect(screen.getByText('Property 1')).toBeInTheDocument()
  })

  test('should render default title if config.title is not defined', () => {
    render(
      setup({
        config: {
          ...mockComponentMetadata.props.prop1,
          title: undefined,
        },
      })
    )
    expect(screen.getByText('Property')).toBeInTheDocument()
  })

  test('should not render editor if config.editor is not defined', () => {
    render(
      setup({
        config: {
          ...mockComponentMetadata.props.prop1,
          editor: undefined as any,
        },
      })
    )
    expect(screen.queryByText('Property 1')).not.toBeInTheDocument()
  })

  test('should not render editor if config.editor is not in editorMap', () => {
    render(
      setup({
        config: {
          ...mockComponentMetadata.props.prop1,
          editor: 'unknown-editor' as any,
        },
      })
    )
    expect(screen.queryByText('Property 1')).not.toBeInTheDocument()
  })

  test('should render defaultValue if value is undefined', () => {
    render(
      setup({
        value: undefined,
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

  test('should render value if value is provided', () => {
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

  test('should render options when editor is select and not have value and default', () => {
    render(
      setup({
        value: undefined,
        config: {
          title: 'Property 1',
          type: 'enum',
          editor: 'select',
          default: undefined as any,
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

  test('should render default value when editor is not select', () => {
    render(
      setup({
        value: undefined,
        config: {
          title: 'Property 1',
          type: 'string',
          editor: 'text',
          default: 'Default Value',
        },
      })
    )
    const input = screen.getByRole('textbox', { name: 'Property 1' })
    expect(input).toHaveValue('Default Value')
  })

  test('should use resolveValue from editorMap entry if available', () => {
    render(
      setup({
        value: undefined,
        config: {
          title: 'Property 1',
          type: 'string',
          editor: 'text',
          default: 'Default Text',
        } as any,
      })
    )
    const input = screen.getByRole('textbox', { name: 'Property 1' })
    expect(input).toHaveValue('Default Text')
  })
})
