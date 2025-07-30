import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageCanvas, type PageCanvasProps } from './index'

const setup = (props?: Partial<PageCanvasProps>) => (
  <PageCanvas overSectionId="test-id" activeId="test-active-id" {...props} />
)

describe('PageCanvas', () => {
  test('renders without crashing', () => {
    render(setup())
    expect(screen.getByTestId('page-canvas')).toBeInTheDocument()
  })
})
