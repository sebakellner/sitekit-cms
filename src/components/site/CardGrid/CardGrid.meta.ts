import CardGrid from './CardGrid'
import type { ComponentMeta } from '../types'
import preview from './cardgrid-preview.png'
import type { CardGridProps } from './CardGrid.schema'

const meta: ComponentMeta<CardGridProps> = {
  name: 'CardGrid',
  category: 'Section',
  description: 'A grid of cards for features or content.',
  preview,
  panels: [
    {
      id: 'content',
      title: 'Content',
      fields: ['title', 'items'],
    },
    {
      id: 'style',
      title: 'Style',
      fields: ['background'],
    },
  ],
  component: CardGrid,
  props: {
    title: {
      type: 'string',
      default: 'Featured Cards',
      editor: 'text',
    },
    background: {
      type: 'string',
      default: '#f7fafc',
      editor: 'colorPicker',
    },
    items: {
      type: 'object',
      default: [
        {
          title: 'Card title 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'Card title 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
        },
        {
          title: 'Card title 3',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
        },
      ],
      editor: 'jsonEditor',
    },
  },
}

export default meta
