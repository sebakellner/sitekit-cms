import type { ComponentMeta } from '@features/editor/types/editor.types'
import Footer from './Footer'
import preview from './footer-preview.png'

const meta: ComponentMeta = {
  name: 'Footer',
  component: Footer,
  category: 'Footer',
  description: 'Footer section for your site.',
  preview,
  panels: [
    {
      id: 'content',
      title: 'Content',
      fields: ['siteName', 'year', 'footerLinks'],
    },
    {
      id: 'style',
      title: 'Style',
      fields: ['background'],
    },
  ],
  props: {
    siteName: {
      type: 'string',
      default: 'Site Kit Builder',
      editor: 'text',
    },
    year: {
      type: 'number',
      default: 2025,
      editor: 'text',
    },
    footerLinks: {
      type: 'object',
      default: [
        { title: 'Company', links: ['About', 'Careers', 'Contact'] },
        { title: 'Support', links: ['Help Center', 'FAQ'] },
        { title: 'Legal', links: ['Privacy Policy', 'Terms'] },
      ],
      editor: 'listEditor',
    },
    background: {
      type: 'string',
      default: '#23242a',
      editor: 'colorPicker',
    },
  },
}

export default meta
