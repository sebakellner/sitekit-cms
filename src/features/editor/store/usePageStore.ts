import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { PageStore } from '@features/editor/types'
import { componentsRegistry } from '@registry/componentRegistry'
import { extractDefaultProps } from '@src/features/editor/utils/extractDefaultProps'
import { SectionSchema } from '../schemas/section.schema'
import { getComponentMeta } from '../utils/getComponentMeta'
import sectionsMock from '../mocks/sections'

export const usePageStore = create<PageStore>((set) => ({
  sections: sectionsMock,
  selectedId: null,
  setSections: (sections) => set({ sections }),
  selectSection: (id) => set({ selectedId: id }),
  updateSectionProps: (id, newProps) =>
    set((state) => ({
      sections: state.sections.map((s) => {
        if (s.id !== id) return s
        const updated = { ...s, props: { ...s.props, ...newProps } }
        return SectionSchema.safeParse(updated).success ? updated : s
      }),
    })),

  addSection: async (name) => {
    const loader = componentsRegistry[name as keyof typeof componentsRegistry]
    if (!loader) return
    const metaModule = await loader()
    const meta = getComponentMeta(metaModule)
    const props = extractDefaultProps(meta.data?.props)
    const newSection = {
      id: uuidv4(),
      name,
      props,
    }
    const result = SectionSchema.safeParse(newSection)
    if (!result.success) {
      console.warn('Section validation failed:', result.error)
      return
    }
    set((state) => ({
      sections: [...state.sections, newSection],
    }))
  },
}))
