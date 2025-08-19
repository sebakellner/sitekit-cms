import { describe, test, expect } from 'vitest'
import { render } from 'test/utils/render'
import type { OverlayBorderProps } from '../OverlayBorder.types'
import OverlayBorder from '../OverlayBorder'

const setup = (overrides: Partial<OverlayBorderProps> = {}) => {
  const defaultProps: OverlayBorderProps = {
    onSelect: vi.fn(),
  }
  const props = { ...defaultProps, ...overrides }

  return <OverlayBorder {...props} />
}

describe('OverlayBorder', () => {
  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })

  test('should pointer events be auto when onSelect is provided', () => {
    const { getByTestId } = render(setup())
    const overlayBorder = getByTestId('overlay-border')
    expect(overlayBorder).toHaveStyle('pointer-events: auto')
  })

  test('should pointer events be none when onSelect is not provided', () => {
    const { getByTestId } = render(setup({ onSelect: undefined }))
    const overlayBorder = getByTestId('overlay-border')
    expect(overlayBorder).toHaveStyle('pointer-events: none')
  })
})
