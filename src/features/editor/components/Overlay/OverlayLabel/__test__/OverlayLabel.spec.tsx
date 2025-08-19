import { describe, test, expect } from 'vitest'
import { render } from 'test/utils/render'
import type { OverlayLabelProps } from '../OverlayLabel.types'
import OverlayLabel from '../OverlayLabel'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockDeleteSection = vi.fn()

vi.mock('@features/editor/store/section/useSectionStore', () => ({
  useSectionStore: (selector: any) =>
    selector({
      deleteSection: mockDeleteSection,
    }),
}))

const setup = (overrides: Partial<OverlayLabelProps> = {}) => {
  const defaultProps: OverlayLabelProps = {
    sectionId: 'test-id',
    label: 'Component Test',
    isSelected: false,
    position: 'above',
  }
  const props = { ...defaultProps, ...overrides }

  return <OverlayLabel {...props} />
}

describe('OverlayLabel', () => {
  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should handleDelete be called when delete button is clicked', async () => {
    render(
      setup({
        isSelected: true,
      })
    )

    const deleteButton = screen.getByTestId('el-delete-button')

    expect(deleteButton).toBeInTheDocument()

    await userEvent.click(deleteButton)

    expect(mockDeleteSection).toHaveBeenCalledWith('test-id')
  })

  test('should not render delete button when not selected', () => {
    render(
      setup({
        isSelected: false,
      })
    )

    const deleteButton = screen.queryByTestId('el-delete-button')

    expect(deleteButton).not.toBeInTheDocument()
  })

  test('should render label above when position is "above"', () => {
    render(
      setup({
        position: 'above',
      })
    )

    const label = screen.getByText('Component Test')

    expect(label).toBeInTheDocument()

    const style = window.getComputedStyle(label.parentElement!)

    expect(style.top).toBe('-28px')
  })

  test('should render label below when position is "below"', () => {
    render(
      setup({
        position: 'below',
      })
    )

    const label = screen.getByText('Component Test')

    expect(label).toBeInTheDocument()

    const style = window.getComputedStyle(label.parentElement!)

    expect(style.top).toBe('100%')
  })
})
