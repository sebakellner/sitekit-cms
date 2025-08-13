import type { GroupedPanel } from '@features/editor/hooks/useGroupedPropsPanels'
import type { Section } from '@features/editor/schemas/section.schema'
import type { ComponentMeta } from '@features/editor/types/editor.types'

declare global {
  var mockComponentMetadata: ComponentMeta
  var mockGroupedPanels: GroupedPanel[]
  var mockSection: Section
  var mockValues: {
    prop1: string
    prop2: string
    prop3: string
  }
}

globalThis.mockComponentMetadata = {
  name: 'DummyComponent',
  description: 'This is a dummy component for testing purposes.',
  category: 'Test',
  preview: '/path/to/preview/image.png',
  component: () => <div>Dummy Component</div>,
  panels: [
    {
      id: 'panel1',
      title: 'Panel 1',
      fields: ['prop1', 'prop2', 'prop3'],
    },
  ],
  props: {
    prop1: {
      title: 'Property 1',
      type: 'string',
      default: 'option1',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ],
      editor: 'select',
    },
    prop2: {
      title: 'Property 2',
      type: 'string',
      default: 'test',
      editor: 'text',
    },
    prop3: {
      title: 'Property 3',
      type: 'string',
      default: '#000000',
      editor: 'colorPicker',
    },
  },
}

globalThis.mockValues = {
  prop1: 'option1',
  prop2: 'new value',
  prop3: 'rgba(255, 0, 0, 1)',
}

globalThis.mockSection = {
  id: 'section1',
  name: 'TestComponent',
  props: {
    ...mockValues,
  },
}

globalThis.mockGroupedPanels = [
  {
    name: 'Panel 1',
    props: [
      {
        key: 'prop1',
        value: 'value1',
        config: mockComponentMetadata.props.prop1,
      },
    ],
  },
]

export {}
