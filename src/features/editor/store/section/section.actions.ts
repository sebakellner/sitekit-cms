import type { Section } from '@features/editor/schemas/section.schema'
import type { SectionStore } from './section.type'
import { SectionSchema } from '@features/editor/schemas/section.schema'
import { createSectionFromRegistry } from '@features/editor/services/createSectionFromRegistry'

export const setSections =
  (set: (fn: (state: SectionStore) => Partial<SectionStore>) => void) =>
  (sections: Section[]) =>
    set(() => ({ sections }))

export const selectSection =
  (set: (fn: (state: SectionStore) => Partial<SectionStore>) => void) =>
  (id: string | null) =>
    set(() => ({ selectedId: id }))

export const updateSectionProps =
  (set: (fn: (state: SectionStore) => Partial<SectionStore>) => void) =>
  (id: string, newProps: Record<string, unknown>) => {
    set((state) => {
      const updatedSections = state.sections.map((section) => {
        if (section.id !== id) return section
        const updatedProps = { ...section.props, ...newProps }
        const updatedSection = { ...section, props: updatedProps }
        const validationResult = SectionSchema.safeParse(updatedSection)
        if (!validationResult.success) {
          console.warn(
            `Failed to update section props for id=${id}:`,
            validationResult.error
          )
          return section
        }
        return updatedSection
      })
      return { sections: updatedSections }
    })
  }

export const addSection =
  (set: (fn: (state: SectionStore) => Partial<SectionStore>) => void) =>
  async (name: string) => {
    const newSection = await createSectionFromRegistry(name)
    if (!newSection) {
      console.warn(`The section '${name}' could not be created`)
      return
    }
    set((state) => ({
      sections: [...state.sections, newSection],
    }))
  }
