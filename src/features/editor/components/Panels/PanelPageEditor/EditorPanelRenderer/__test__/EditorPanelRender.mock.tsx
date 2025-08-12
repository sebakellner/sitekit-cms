import type { ComponentMeta } from '@features/editor/types/editor.types'

export const mockComponentMetadata: ComponentMeta = {
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
      default: 'Default Value',
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

export const mockValues = {
  prop1: 'option1',
  prop2: 'new value',
  prop3: 'rgba(255, 0, 0, 1)',
}
