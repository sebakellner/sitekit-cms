import { expect, describe, test } from 'vitest'
import EditorPanelRenderer from '../EditorPanelRenderer'
import type { EditorPanelRendererProps } from '../EditorPanelRenderer.types'
import { mockComponentMetadata, mockValues } from './EditorPanelRender.mock'
import { render } from 'test/utils/render'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const setup = ({
  meta = mockComponentMetadata,
  values = mockValues,
  onChange = () => {},
}: Partial<EditorPanelRendererProps> = {}) => {
  return <EditorPanelRenderer meta={meta} values={values} onChange={onChange} />
}

describe('EditorPanelRenderer', () => {
  test('should render the component with the correct metadata', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should render correctly', () => {
    render(setup({}))
    expect(screen.getByText('Panel 1')).toBeInTheDocument()
  })

  test('should not render anything if meta.panels is undefined', () => {
    render(
      setup({
        meta: {
          ...mockComponentMetadata,
          panels: undefined,
        },
      })
    )
    expect(screen.queryByText('Panel 1')).not.toBeInTheDocument()
  })

  test('should call onChange when a field value changes', () => {
    const mockOnChange = vi.fn()
    render(setup({ onChange: mockOnChange }))

    const input = screen.getByDisplayValue('new value')

    fireEvent.change(input, { target: { value: 'new test value' } })

    expect(mockOnChange).toHaveBeenLastCalledWith('prop2', 'new test value')
  })

  test('should not render panels if propConfig is undefined', () => {
    render(
      setup({
        meta: {
          ...mockComponentMetadata,
          props: { ...mockComponentMetadata.props, prop1: undefined as any },
        },
      })
    )
    expect(screen.queryByText('Property 1')).not.toBeInTheDocument()
  })

  test('should render fieldKey title if propConfig title is not provided', () => {
    render(
      setup({
        meta: {
          ...mockComponentMetadata,
          props: {
            ...mockComponentMetadata.props,
            prop1: { ...mockComponentMetadata.props.prop1, title: undefined },
          },
        },
      })
    )
    expect(screen.getByText('prop1')).toBeInTheDocument()
  })

  test('should not render anything if meta is not provided', () => {
    render(setup({ meta: {} as any }))
    expect(screen.queryByText('Panel 1')).not.toBeInTheDocument()
  })

  test('should render values', () => {
    render(setup())
    expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument()
    expect(screen.getByDisplayValue('new value')).toBeInTheDocument()
    expect(screen.getByDisplayValue('rgba(255, 0, 0, 1)')).toBeInTheDocument()
  })

  test('should render fields inside a panel', () => {
    render(setup())
    expect(screen.getByText('Property 1')).toBeInTheDocument()
    expect(screen.getByText('Property 2')).toBeInTheDocument()
    expect(screen.getByText('Property 3')).toBeInTheDocument()
  })
})
