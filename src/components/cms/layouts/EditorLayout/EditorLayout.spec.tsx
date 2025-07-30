import { describe, test } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from 'test/utils/render'
import { EditorLayout } from './index'

const setup = () => <EditorLayout />

describe('EditorLayout', () => {
  test('should render without crashing', () => {
    render(setup())
    expect(screen.getByTestId('editor-layout')).toBeInTheDocument()
  })

  test('should render all child components', () => {
    render(setup())
    expect(screen.getByTestId('left-sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('center-preview')).toBeInTheDocument()
    expect(screen.getByTestId('right-editor')).toBeInTheDocument()
  })
})
