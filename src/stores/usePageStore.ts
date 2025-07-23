import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { PageStore } from '@src/types'

export const usePageStore = create<PageStore>((set) => ({
  sections: [
    {
      id: 'canvas-nav',
      name: 'Nav',
      props: {
        items: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
        ],
        background: 'white',
        buttonLabel: 'Contact US',
      },
    },
    {
      id: 'canvas-hero',
      name: 'Hero',
      props: {
        title: 'Welcome to Site Kit Builder',
        description: 'This description reads from Store',
        background: { color: 'white' },
        headingColor: 'black',
        textColor: 'dark-2',
        buttonLabel: 'Get Started',
        buttonColor: 'brand',
        buttonSize: 'large',
      },
    },
    {
      id: 'canvas-card-grid',
      name: 'CardGrid',
      props: {
        title: 'Featured Cards',
        background: 'light-2',
        cards: [
          {
            title: 'Card title 1',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            title: 'Card title 2',
            description:
              'Sed do eiusmod tempor incididunt ut labore et dolore.',
          },
          {
            title: 'Card title 3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          },
        ],
      },
    },
    {
      id: 'canvas-info-text',
      name: 'InfoText',
      props: {
        title: 'Lorem ipsum dolor sit amet',
        text: 'Consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.',
        formats: [
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
        imageSrc: 'https://picsum.photos/id/42/340/340',
        imageAlt: 'Learning formats preview',
      },
    },
    {
      id: 'canvas-footer',
      name: 'Footer',
      props: {
        siteName: 'Site Kit Builder',
        year: 2025,
        background: '#23242a',
        footerLinks: [
          {
            title: 'Company',
            links: ['About', 'Careers', 'Contact'],
          },
          {
            title: 'Support',
            links: ['Help Center', 'FAQ'],
          },
          {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms'],
          },
        ],
      },
    },
  ],
  selectedId: null,
  setSections: (sections) => set({ sections }),
  selectSection: (id) => set({ selectedId: id }),
  updateSectionProps: (id, newProps) =>
    set((state) => ({
      sections: state.sections.map((s) =>
        s.id === id ? { ...s, props: { ...s.props, ...newProps } } : s
      ),
    })),
  addSection: (name, props = {}) =>
    set((state) => ({
      sections: [...state.sections, { id: uuidv4(), name, props }],
    })),
}))
