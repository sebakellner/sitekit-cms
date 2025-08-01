import Footer from './Footer'
import preview from './footer-preview.png'
import type { ComponentMeta } from '@components/site/types'
import type { FooterProps } from './Footer.schema'

const meta: ComponentMeta<FooterProps> = {
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
      type: 'string',
      default: '#23242a',
      editor: 'colorPicker',
    },
  },
}

export default meta
