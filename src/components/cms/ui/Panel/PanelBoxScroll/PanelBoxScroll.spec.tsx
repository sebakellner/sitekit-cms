import { describe, test } from 'vitest'
import { render } from 'test/utils/render'
import { getByTestId, screen } from '@testing-library/react'
import { PanelBoxScroll, type PanelBoxScrollProps } from './index'

const setup = ({ children, ...restProps }: PanelBoxScrollProps) => (
  <PanelBoxScroll {...restProps}>{children}</PanelBoxScroll>
)

describe('PanelBoxScroll', () => {
  test('should render children correctly', () => {
    const children = <div>Test Content</div>

    render(setup({ children }))

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('should apply padding and gap styles', () => {
    const children = <div>Test Content</div>

    const { container } = render(setup({ children, p: 6, gap: 4 }))

    const box = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(box)

    expect(styles.padding).toBe('var(--chakra-spacing-6)')
    expect(styles.gap).toBe('var(--chakra-spacing-4)')
  })

  test('should render scrollbar when overflow occurs', () => {
    const children = (
      <div style={{ height: '200px', width: '100%' }}>
        <div style={{ height: '400px' }}>Scrollable Content</div>
      </div>
    )

    const { container } = render(setup({ children, p: 0, gap: 0 }))

    const box = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(box)

    expect(styles.overflowY).toBe('auto')
    expect(styles.overflowX).toBe('hidden')
  })
})
