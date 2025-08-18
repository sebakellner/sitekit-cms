import { renderHook } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { useGroupedPropsPanels } from '../useGroupedPropsPanels'

describe('useGroupedPropsPanels', () => {
  test('Should group props by panel', () => {
    const { result } = renderHook(() =>
      useGroupedPropsPanels(mockComponentMetadata, mockSection)
    )

    expect(result.current).toEqual([
      {
        name: 'Panel 1',
        props: [
          {
            key: 'prop1',
            value: mockValues.prop1,
            config: {
              default: 'option1',
              type: 'string',
              title: 'Property 1',
              options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
              ],
              editor: 'select',
            },
          },
          {
            key: 'prop2',
            value: mockValues.prop2,
            config: {
              default: 'test',
              type: 'string',
              title: 'Property 2',
              editor: 'text',
            },
          },
          {
            key: 'prop3',
            value: mockValues.prop3,
            config: {
              default: '#000000',
              editor: 'colorPicker',
              title: 'Property 3',
              type: 'string',
            },
          },
        ],
      },
    ])
  })

  test('Should render empty array if meta is undefined', () => {
    const { result } = renderHook(() =>
      useGroupedPropsPanels(undefined, mockSection)
    )

    expect(result.current).toEqual([])
  })
})
