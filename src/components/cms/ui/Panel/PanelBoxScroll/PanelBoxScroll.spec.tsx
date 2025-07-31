import { describe, test } from 'vitest'
import { render } from 'test/utils/render'
import { screen } from '@testing-library/react'
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

    render(setup({ children, p: 6, gap: 4 }))

    const box = screen.getByTestId('panel-box')

    const styles = getComputedStyle(box)

    expect(styles.padding).not.toBe('')
    expect(styles.gap).not.toBe('')
    expect(styles.padding).toMatch(/px|rem|em|%|var\(/)
    expect(styles.gap).toMatch(/px|rem|em|%|var\(/)
  })

  test('should render scrollbar when overflow occurs', () => {
    const children = (
      <div style={{ height: '200px', width: '100%' }}>
        <div style={{ height: '400px' }}>Scrollable Content</div>
      </div>
    )

    render(setup({ children, p: 0, gap: 0 }))

    const box = screen.getByTestId('panel-box')

    const styles = getComputedStyle(box)

    expect(styles.overflowY).toBe('auto')
    expect(styles.overflowX).toBe('hidden')
  })
})
