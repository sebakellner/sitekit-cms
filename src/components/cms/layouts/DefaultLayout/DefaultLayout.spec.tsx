import { describe, test } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from 'test/utils/render'
import { DefaultLayout, type DefaultLayoutProps } from './index'

const setup = (props?: Partial<DefaultLayoutProps>) => (
  <DefaultLayout {...props} />
)

describe('DefaultLayout', () => {
  test('should render without crashing', () => {
    render(setup())
    expect(screen.getByTestId('default-layout')).toBeInTheDocument()
  })

  test('should render header and content areas', () => {
    render(setup())
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
})
