import { describe, test } from 'vitest'
import { render } from 'test/utils/render'
import { screen } from '@testing-library/react'
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
})
