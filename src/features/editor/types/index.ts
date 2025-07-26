import type { Section } from '../schemas/section.schema'

export type PageStore = {
  sections: Section[]
  selectedId: string | null
  setSections: (sections: Section[]) => void
  updateSectionProps: (id: string, newProps: Record<string, unknown>) => void
  selectSection: (id: string | null) => void
  addSection: (type: string, props?: Record<string, unknown>) => void
}
