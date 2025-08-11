import type { ComponentMeta } from '@features/editor/types/editor.types'
import Hero from './Hero'
import preview from './hero-preview.png'

const meta: ComponentMeta = {
  name: 'Hero',
  category: 'Section',
  description: 'A full-width hero section with background and text.',
  preview,
  component: Hero,
  panels: [
    {
      id: 'content',
      title: 'Content',
      fields: ['title', 'description'],
    },
    {
      id: 'style',
      title: 'Style',
      fields: ['headingColor', 'textColor', 'background'],
    },
    {
      id: 'action',
      title: 'Action',
      fields: ['buttonLabel', 'buttonColor', 'buttonSize'],
    },
  ],
  props: {
    title: {
      title: 'Title',
      type: 'string',
      default: 'Welcome to Site Kit Builder',
      editor: 'text',
    },
    description: {
      title: 'Description',
      type: 'string',
      default:
        'Create and customize your website easily with our intuitive tools.',
      editor: 'text',
    },
    buttonLabel: {
      title: 'Button Label',
      type: 'string',
      default: 'Get Started',
      editor: 'text',
    },
    background: {
      title: 'Background',
      type: 'string',
      default: '#ffffff',
      editor: 'colorPicker',
    },
    headingColor: {
      title: 'Heading Color',
      type: 'string',
      default: 'black',
      editor: 'colorPicker',
    },
    textColor: {
      title: 'Text Color',
      type: 'string',
      default: '#444444',
      editor: 'colorPicker',
    },
    buttonColor: {
      title: 'Button Color',
      type: 'string',
      default: '#01A982',
      editor: 'colorPicker',
    },
    buttonSize: {
      title: 'Button Size',
      type: 'enum',
      default: 'large',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      editor: 'select',
    },
  },
}

export default meta
