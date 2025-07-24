import CardGrid from '.'
import type { ComponentMeta } from '../types'
import preview from './cardgrid-preview.png'

const meta: ComponentMeta = {
  name: 'CardGrid',
  category: 'Section',
  description: 'A grid of cards for features or content.',
  preview,
  component: CardGrid,
  props: {
    title: {
      type: 'string',
      default: 'Featured Cards',
      editor: 'text',
    },
    background: {
      type: ['color', 'string'],
      default: 'light-2',
      editor: 'colorPicker',
    },
    cards: {
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
