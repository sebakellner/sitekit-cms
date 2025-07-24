import InfoText from '.'
import type { ComponentMeta } from '@components/site/types'
import preview from './infotext-preview.png'

const meta: ComponentMeta = {
  name: 'InfoText',
  category: 'Section',
  description: 'Informational text section with bullet points.',
  preview,
  component: InfoText,
  props: {
    title: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet',
      editor: 'text',
    },
    text: {
      type: 'string',
      default:
        'Consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.',
      editor: 'text',
    },
    formats: {
      type: 'object',
      default: [
        {
          label: 'Lorem ipsum dolor',
          description: 'Sit amet, consectetur adipiscing elit.',
        },
        {
          label: 'Sed do eiusmod',
          description: 'Tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          label: 'Ut enim ad minim',
          description:
            'Veniam, quis nostrud exercitation ullamco laboris nisi.',
        },
        {
          label: 'Duis aute irure',
          description: 'Dolor in reprehenderit in voluptate velit esse.',
        },
        {
          label: 'Excepteur sint occaecat',
          description: 'Cupidatat non proident, sunt in culpa qui officia.',
        },
      ],
      editor: 'jsonEditor',
    },
    imageSrc: {
      type: 'string',
      default: 'https://picsum.photos/id/42/340/340',
      editor: 'text',
    },
    imageAlt: {
      type: 'string',
      default: 'Learning formats preview',
      editor: 'text',
    },
    background: {
      type: 'color',
      default: 'white',
      editor: 'colorPicker',
    },
  },
}

export default meta
