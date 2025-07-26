import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { PageStore } from '@features/editor/types'
import { SectionSchema } from '../schemas/section.schema'
import mockSections from '../mocks/mockSections'
import { createSectionFromRegistry } from '../services/createSectionFromRegistry'

export const usePageStore = create(
  persist<PageStore>(
    (set) => ({
      sections: mockSections,
      selectedId: null,

      setSections: (sections) => set({ sections }),

      selectSection: (id) => set({ selectedId: id }),

      updateSectionProps: (id, newProps) => {
        set((state) => {
          const updatedSections = state.sections.map((section) => {
            if (section.id !== id) return section

            const updatedProps = { ...section.props, ...newProps }
            const updatedSection = { ...section, props: updatedProps }

            const validationResult = SectionSchema.safeParse(updatedSection)
            if (!validationResult.success) {
              console.warn(
                'Failed to update section props:',
                validationResult.error
              )
              return section
            }

            return updatedSection
          })

          return { sections: updatedSections }
        })
      },

      addSection: async (name) => {
        const newSection = await createSectionFromRegistry(name)
        if (!newSection) return

        set((state) => ({
          sections: [...state.sections, newSection],
        }))
      },
    }),
    {
      name: 'page-store',
    }
  )
)
