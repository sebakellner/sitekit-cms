import { describe, test, expect } from 'vitest'
import { render } from 'test/utils/render'
import type { InspectorOverlayProps } from '../InspectorOverlay.types'
import InspectorOverlay from '../InspectorOverlay'

const setup = (overrides: Partial<InspectorOverlayProps> = {}) => {
  const defaultProps: InspectorOverlayProps = {
    sectionId: 'test-id',
    label: 'Component Test',
    showOverlay: true,
    isSelected: false,
    onSelect: vi.fn(),
    children: <div>Test Content</div>,
    overlayLabelPosition: 'above',
  }
  const props = { ...defaultProps, ...overrides }

  return <InspectorOverlay {...props} />
}

describe('InspectorOverlay', () => {
  test('should match with snapshot', () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
  })
})
