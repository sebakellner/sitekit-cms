import type { Section } from '@features/editor/schemas/section.schema'

export type SectionStore = {
  sections: Section[]
  selectedId: string | null
  setSections: (sections: Section[]) => void
  updateSectionProps: (id: string, newProps: Record<string, unknown>) => void
  selectSection: (id: string | null) => void
  addSection: (name: string) => void
}
