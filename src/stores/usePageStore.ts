import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { PageStore } from '@src/types'

export const usePageStore = create<PageStore>((set) => ({
  sections: [
    {
      id: uuidv4(),
      name: 'Nav',
      props: { logo: 'Site Logo', links: ['Home', 'About', 'Contact'] },
    },
    {
      id: uuidv4(),
      name: 'Hero',
      props: {
        title: 'Welcome to Site Kit Builder',
        description: 'This description reads from Store',
      },
    },
    { id: uuidv4(), name: 'CardGrid', props: { background: 'light' } },
    {
      id: uuidv4(),
      name: 'InfoText',
      props: { buttonText: 'Send Message' },
    },
    {
      id: uuidv4(),
      name: 'Footer',
      props: { buttonText: 'Send Message' },
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
