import { describe, test, expect } from 'vitest'
import { render } from 'test/utils/render'
import type { InspectableProps } from '../Inspectable.types'
import Inspectable from '../Inspectable'
import { fireEvent } from '@testing-library/react'

vi.mock('../../InspectorOverlay', () => {
  return {
    InspectorOverlay: ({ children, onSelect }: any) => (
      <div data-testid="overlay" onClick={onSelect}>
        {children}
      </div>
    ),
  }
})

const mockSelectSection = vi.fn()
vi.mock('@features/editor/store/section/useSectionStore', () => {
  return {
    useSectionStore: (selector: any) =>
      selector({
        selectedId: null,
        selectSection: mockSelectSection,
      }),
  }
})

const setup = (overrides: Partial<InspectableProps> = {}) => {
  const defaultProps: InspectableProps = {
    id: 'test-id',
    name: 'Component Test',
    children: <div data-testid="inspectable-child">Test Content</div>,
    overlayLabelPosition: 'above',
    showInspectorOverlay: true,
  }
  const props = { ...defaultProps, ...overrides }

  return <Inspectable {...props} />
}

describe('Inspectable', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should render children correctly', () => {
    const { getByText } = render(setup())
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  test('should call selectSection when overlay triggers onSelect', () => {
    const { getByTestId } = render(setup())

    fireEvent.click(getByTestId('overlay'))

    expect(mockSelectSection).toHaveBeenCalledWith('test-id')
  })

  test('should compute label from children when name is not provided', () => {
    const { getByText } = render(
      setup({
        name: undefined,
        children: <span>Child Content</span>,
      })
    )

    expect(getByText('Child Content')).toBeInTheDocument()
  })

  test('should handle mouse enter and leave events', () => {
    const { getByTestId } = render(setup())
    const box = getByTestId('inspectable-box')

    fireEvent.mouseEnter(box)
    fireEvent.mouseLeave(box)
  })
})
