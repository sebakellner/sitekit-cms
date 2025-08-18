import { describe, test, expect } from 'vitest'
import { render } from 'test/utils/render'
import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextEditor from '../TextEditor'
import { useState } from 'react'

const setup = (overrides: Partial<PanelEditorBase<string>> = {}) => {
  const defaultProps: PanelEditorBase<string> = {
    title: 'Title',
    value: 'This is a text editor',
    onChange: () => {},
  }
  const props = { ...defaultProps, ...overrides }

  const ControlledTextEditor = () => {
    const [value, setValue] = useState(props.value)
    return <TextEditor {...props} value={value} onChange={setValue} />
  }

  return <ControlledTextEditor />
}

describe('TextEditor', () => {
  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should call onChange with updated value', async () => {
    render(setup())

    const input = screen.getByLabelText('Title')
    await userEvent.clear(input)
    expect(input).toHaveValue('') // Ahora sí debe estar vacío
    await userEvent.type(input, 'New Title')
    await userEvent.tab()

    await waitFor(() => {
      expect(input).toHaveValue('New Title')
    })
  })
})
