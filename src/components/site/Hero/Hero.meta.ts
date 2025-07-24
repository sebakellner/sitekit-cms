import Hero from '.'
import preview from './hero-preview.png'
import type { ComponentMeta } from '../types'

const meta: ComponentMeta = {
  name: 'Hero',
  category: 'Section',
  description: 'A full-width hero section with background and text.',
  preview,
  component: Hero,
  props: {
    title: {
      type: 'string',
      default: 'Welcome to Site Kit Builder',
      editor: 'text',
    },
    description: {
      type: 'string',
      default:
        'Create and customize your website easily with our intuitive tools.',
      editor: 'text',
    },
    buttonLabel: {
      type: 'string',
      default: 'Get Started',
      editor: 'text',
    },
    background: {
      type: ['color', 'object'],
      default: 'white',
      editor: 'colorPicker',
    },
    headingColor: {
      type: ['color', 'string'],
      default: 'black',
      editor: 'colorPicker',
    },
    textColor: {
      type: ['color', 'string'],
      default: 'dark-2',
      editor: 'colorPicker',
    },
    buttonColor: {
      type: ['color', 'string'],
      default: 'brand',
      editor: 'colorPicker',
    },
    buttonSize: {
      type: 'enum',
      default: 'large',
      options: ['small', 'medium', 'large'],
      editor: 'select',
    },
  },
}

export default meta
