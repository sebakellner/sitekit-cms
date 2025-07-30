import { describe, test } from 'vitest'
import { render } from 'test/utils/render'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PanelBoxCollapsible, type PanelBoxCollapsibleProps } from './index'

const setup = ({ children, ...restProps }: PanelBoxCollapsibleProps) => (
  <PanelBoxCollapsible {...restProps}>{children}</PanelBoxCollapsible>
)

describe('PanelBoxCollapsible', () => {
  test('should render children correctly', () => {
    const children = <div>Test Content</div>
    render(setup({ title: 'Test Title', children }))
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('should render title correctly', () => {
    const children = <div>Test Content</div>
    render(setup({ title: 'Test Title', children }))
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  test('should collapse and expand when title is clicked', async () => {
    const children = <div>Test Content</div>
    render(setup({ title: 'Test Title', children }))

    expect(screen.getByText('Test Content')).toBeInTheDocument()

    await userEvent.click(screen.getByText('Test Title'))

    expect(screen.queryByText('Test Content')).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Test Title'))

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
