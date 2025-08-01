import InfoText from './InfoText'
import preview from './infotext-preview.png'
import type { ComponentMeta } from '@components/site/types'
import type { InfoTextProps } from './InfoText.schema'

const meta: ComponentMeta<InfoTextProps> = {
  name: 'InfoText',
  category: 'Section',
  description: 'Informational text section with bullet points.',
  preview,
  component: InfoText,
  panels: [
    {
      id: 'content',
      title: 'Content',
      fields: ['title', 'text', 'formats'],
    },
    {
      id: 'style',
      title: 'Style',
      fields: ['imageSrc', 'imageAlt', 'background'],
    },
  ],
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
      type: 'string',
      default: 'white',
      editor: 'colorPicker',
    },
  },
}

export default meta
