import type { ComponentMeta } from '@features/editor/types/editor.types'
import InfoText from './InfoText'
import preview from './infotext-preview.png'

const meta: ComponentMeta = {
  name: 'InfoText',
  category: 'Section',
  description: 'Informational text section with bullet points.',
  preview,
  component: InfoText,
  panels: [
    {
      id: 'content',
      title: 'Content',
      fields: ['title', 'text'],
    },
    {
      id: 'list',
      title: 'List',
      fields: ['formats'],
    },
    {
      id: 'style',
      title: 'Style',
      fields: ['imageSrc', 'imageAlt', 'background'],
    },
  ],
  props: {
    title: {
      title: 'Title',
      type: 'string',
      default: 'Lorem ipsum dolor sit amet',
      editor: 'text',
    },
    text: {
      title: 'Text',
      type: 'string',
      default:
        'Consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.',
      editor: 'text',
    },
    formats: {
      title: 'Formats',
      type: 'object',
      default: [
        {
          label: 'Lorem ipsum dolor:',
          description: 'Sit amet, consectetur adipiscing elit.',
        },
        {
          label: 'Sed do eiusmod:',
          description: 'Tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          label: 'Ut enim ad minim:',
          description:
            'Veniam, quis nostrud exercitation ullamco laboris nisi.',
        },
        {
          label: 'Duis aute irure:',
          description: 'Dolor in reprehenderit in voluptate velit esse.',
        },
        {
          label: 'Excepteur sint occaecat:',
          description: 'Cupidatat non proident, sunt in culpa qui officia.',
        },
      ],
      editor: 'listEditor',
    },
    imageSrc: {
      title: 'Image',
      type: 'string',
      default: 'https://picsum.photos/id/42/340/340',
      editor: 'text',
    },
    imageAlt: {
      title: 'Alt Text',
      type: 'string',
      default: 'Learning formats preview',
      editor: 'text',
    },
    background: {
      title: 'Background',
      type: 'string',
      default: '#ffffff',
      editor: 'colorPicker',
    },
  },
}

export default meta
