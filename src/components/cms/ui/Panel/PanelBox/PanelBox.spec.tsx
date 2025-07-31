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
})
