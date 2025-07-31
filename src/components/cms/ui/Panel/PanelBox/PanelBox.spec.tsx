import { describe, test } from 'vitest'
import { render } from 'test/utils/render'
import { screen } from '@testing-library/react'
import { PanelBox, type PanelBoxProps } from './index'

const setup = ({ children, ...restProps }: PanelBoxProps) => (
  <PanelBox {...restProps}>{children}</PanelBox>
)

describe('PanelBox', () => {
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

    expect(styles.padding).toBe('var(--chakra-spacing-6)')
    expect(styles.gap).toBe('var(--chakra-spacing-4)')
  })

  test('should apply border styles based on borderSide prop', () => {
    const children = <div>Test Content</div>
    render(setup({ children, borderSide: 'top' }))

    const box = screen.getByTestId('panel-box')
    const styles = getComputedStyle(box)

    expect(styles.borderTopWidth).toBe('1px')
    expect(styles.borderTopStyle).toBe('solid')
    expect(styles.borderBottomWidth).toBe('')
    expect(styles.borderLeftWidth).toBe('')
    expect(styles.borderRightWidth).toBe('')
  })

  test('should apply correct borderProps for valid borderSide', () => {
    render(setup({ borderSide: 'top', children: <div /> }))

    const panelBox = screen.getByTestId('panel-box')

    const styles = getComputedStyle(panelBox)

    expect(styles.borderTopWidth).toBe('1px')
    expect(styles.borderTopStyle).toBe('solid')
  })

  test('should not apply border when borderSide is none', () => {
    render(setup({ borderSide: 'none', children: <div /> }))

    const panelBox = screen.getByTestId('panel-box')

    const styles = getComputedStyle(panelBox)

    expect(['', '0px']).toContain(styles.borderTopWidth)
    expect(['', '0px']).toContain(styles.borderBottomWidth)
    expect(['', '0px']).toContain(styles.borderLeftWidth)
    expect(['', '0px']).toContain(styles.borderRightWidth)
  })

  test('should not apply border for invalid borderSide', () => {
    // @ts-expect-error purposely passing invalid value
    render(setup({ borderSide: 'invalid', children: <div /> }))

    const panelBox = screen.getByTestId('panel-box')

    const styles = getComputedStyle(panelBox)
    expect(['', '0px']).toContain(styles.borderTopWidth)
    expect(['', '0px']).toContain(styles.borderBottomWidth)
    expect(['', '0px']).toContain(styles.borderLeftWidth)
    expect(['', '0px']).toContain(styles.borderRightWidth)
  })
})
