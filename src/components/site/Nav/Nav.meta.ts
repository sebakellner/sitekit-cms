import type { ComponentMeta } from '@features/editor/types/editor.types'
import Nav from './Nav'
import preview from './nav-preview.png'

const meta: ComponentMeta = {
  name: 'Nav',
  component: Nav,
  category: 'Navigation',
  description: 'Navigation bar for your site.',
  preview,
  panels: [
    {
      id: 'items',
      title: 'Navigation',
      fields: ['items'],
    },
    {
      id: 'style',
      title: 'Style',
      fields: ['background', 'buttonLabel'],
    },
    {
      id: 'action',
      title: 'Action',
      fields: ['buttonLabel'],
    },
  ],
  props: {
    items: {
      title: 'Navigation Items',
      type: 'object',
      default: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
      editor: 'listEditor',
    },
    background: {
      title: 'Background',
      type: 'string',
      default: 'white',
      editor: 'colorPicker',
    },
    buttonLabel: {
      title: 'Call to Action',
      type: 'string',
      default: 'Contact US',
      editor: 'text',
    },
  },
}

export default meta
