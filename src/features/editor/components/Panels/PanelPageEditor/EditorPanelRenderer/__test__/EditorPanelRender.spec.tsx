import { expect, describe, test } from 'vitest'
import EditorPanelRenderer from '../EditorPanelRenderer'
import type { EditorPanelRendererProps } from '../EditorPanelRenderer.types'
import { render } from 'test/utils/render'
import { fireEvent, screen } from '@testing-library/react'

const setup = (overrides: Partial<EditorPanelRendererProps> = {}) => {
  const defaultProps: EditorPanelRendererProps = {
    groupedPanels: mockGroupedPanels,
    onChange: () => {},
  }
  const props = { ...defaultProps, ...overrides }
  return <EditorPanelRenderer {...props} />
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

  test('should call onChange when a field value changes', () => {
    const mockOnChange = vi.fn()
    render(setup({ onChange: mockOnChange }))

    const input = screen.getByDisplayValue('Option 1')

    fireEvent.change(input, { target: { value: 'option2' } })

    expect(mockOnChange).toHaveBeenLastCalledWith('prop1', 'option2')
  })

  test('should handle undefined groupedPanels', () => {
    render(setup({ groupedPanels: undefined }))
    expect(screen.getByText('No properties available')).toBeInTheDocument()
  })
})
