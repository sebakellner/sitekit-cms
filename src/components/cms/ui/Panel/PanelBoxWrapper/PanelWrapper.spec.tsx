import { describe, test } from 'vitest'
import { render } from 'test/utils/render'
import { getByTestId, screen } from '@testing-library/react'
import { PanelWrapper, type PanelWrapperProps } from './index'

const setup = ({ children, ...restProps }: PanelWrapperProps) => (
  <PanelWrapper {...restProps}>{children}</PanelWrapper>
)

describe('PanelWrapper', () => {
  test('should render children correctly', () => {
    const children = <div>Test Content</div>
    render(setup({ children }))
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('should apply border styles based on borderSide prop', () => {
    const { container } = render(
      setup({ children: <div />, borderSide: 'left' })
    )
    const box = getByTestId(container, 'panel-box')

    const styles = getComputedStyle(box)

    expect(styles.borderLeftWidth).toBe('1px')
    expect(styles.borderLeftStyle).toBe('solid')
  })
})
