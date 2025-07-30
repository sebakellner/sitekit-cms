import { describe, test } from 'vitest'
import { render } from 'test/utils/render'
import { getByTestId, screen } from '@testing-library/react'
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

  test('should apply border styles passing bottom borderSide prop', () => {
    const { container } = render(
      setup({ borderSide: 'bottom', children: <div>Test Content</div> })
    )

    const panelBox = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(panelBox)

    expect(styles.borderBottomWidth).toBe('1px')
    expect(styles.borderBottomStyle).toBe('solid')
  })

  test('should apply border styles passing top borderSide prop', () => {
    const { container } = render(
      setup({ borderSide: 'top', children: <div>Test Content</div> })
    )

    const panelBox = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(panelBox)

    expect(styles.borderTopWidth).toBe('1px')
    expect(styles.borderTopStyle).toBe('solid')
  })

  test('should apply border styles passing left borderSide prop', () => {
    const { container } = render(
      setup({ borderSide: 'left', children: <div>Test Content</div> })
    )
    const panelBox = getByTestId(container, 'panel-box')
    const styles = getComputedStyle(panelBox)
    expect(styles.borderLeftWidth).toBe('1px')
    expect(styles.borderLeftStyle).toBe('solid')
  })

  test('should apply border styles passing right borderSide prop', () => {
    const { container } = render(
      setup({ borderSide: 'right', children: <div>Test Content</div> })
    )

    const panelBox = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(panelBox)

    expect(styles.borderRightWidth).toBe('1px')
    expect(styles.borderRightStyle).toBe('solid')
  })

  test('should apply border styles passing vertical borderSide prop', () => {
    const { container } = render(
      setup({ borderSide: 'vertical', children: <div>Test Content</div> })
    )

    const panelBox = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(panelBox)

    expect(styles.borderTopWidth).toBe('1px')
    expect(styles.borderBottomWidth).toBe('1px')
  })

  test('should apply border styles passing horizontal borderSide prop', () => {
    const { container } = render(
      setup({ borderSide: 'horizontal', children: <div>Test Content</div> })
    )

    const panelBox = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(panelBox)

    expect(styles.borderLeftWidth).toBe('1px')
    expect(styles.borderRightWidth).toBe('1px')
  })
})
