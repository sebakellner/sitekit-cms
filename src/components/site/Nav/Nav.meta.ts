import Nav from './Nav'
import type { ComponentMeta } from '@components/site/types'
import preview from './nav-preview.png'
import type { NavProps } from './Nav.schema'

const meta: ComponentMeta<NavProps> = {
  name: 'Nav',
  component: Nav,
  category: 'Navigation',
  description: 'Navigation bar for your site.',
  preview,
  panels: [
    {
      id: 'items',
      title: 'Items',
      fields: ['items'],
    },
    {
      id: 'style',
      title: 'Style',
      fields: ['background', 'buttonLabel'],
    },
  ],
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
      type: 'string',
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
