import { describe, test, expect } from 'vitest'
import { render } from 'test/utils/render'
import ColorPickerEditor from '../ColorPickerEditor'
import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'
import { screen } from '@testing-library/react'

const setup = (overrides: Partial<PanelEditorBase<string>> = {}) => {
  const defaultProps: PanelEditorBase<string> = {
    title: 'Color Picker',
    value: '#ffffff',
    onChange: () => {},
  }
  const props = { ...defaultProps, ...overrides }
  return <ColorPickerEditor {...props} />
}

describe('ColorPicker', () => {
  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should handle falsy value and pass undefined to ColorPicker.Root', () => {
    render(setup({ value: undefined }))
    const input = screen.getByLabelText('Color Picker')
    expect(input).toHaveValue('')
  })
})
