import Footer from '.'
import preview from './footer-preview.png'
import type { ComponentMeta } from '@components/site/types'

const meta: ComponentMeta = {
  name: 'Footer',
  component: Footer,
  category: 'Footer',
  description: 'Footer section for your site.',
  preview,
  props: {
    siteName: {
      type: 'string',
      default: 'Site Kit Builder',
      editor: 'text',
    },
    year: {
      type: 'number',
      default: 2025,
      editor: 'numberInput',
    },
    footerLinks: {
      type: 'object',
      default: [
        { title: 'Company', links: ['About', 'Careers', 'Contact'] },
        { title: 'Support', links: ['Help Center', 'FAQ'] },
        { title: 'Legal', links: ['Privacy Policy', 'Terms'] },
      ],
      editor: 'jsonEditor',
    },
    background: {
      type: ['color', 'string'],
      default: '#23242a',
      editor: 'colorPicker',
    },
  },
}

export default meta
