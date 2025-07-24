import Nav from '.'
import type { ComponentMeta } from '@components/site/types'
import preview from './nav-preview.png'

const meta: ComponentMeta = {
  name: 'Nav',
  component: Nav,
  category: 'Navigation',
  description: 'Navigation bar for your site.',
  preview,
  props: {
    items: {
      type: 'object',
      default: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
      editor: 'jsonEditor',
    },
    background: {
      type: ['color', 'string'],
      default: 'white',
      editor: 'colorPicker',
    },
    buttonLabel: {
      type: 'string',
      default: 'Contact US',
      editor: 'text',
    },
  },
}

export default meta
