import { componentsRegistry } from '@src/lib/componentRegistry'
import { v4 as uuidv4 } from 'uuid'
import type { Section } from '@src/types'
import type { ComponentMeta } from '@components/site/types'

export async function insertSectionAtUtil(
  sections: Section[],
  setSections: (sections: Section[]) => void,
  name: string,
  index: number
) {
  const loader = componentsRegistry[name as keyof typeof componentsRegistry]
  if (!loader) {
    console.warn(`Component "${name}" not found in registry.`)
    return
  }

  const metaModule = await loader()

  const meta = metaModule.default as ComponentMeta

  let defaultProps: Record<string, unknown> = {}
  if (meta?.props) {
    defaultProps = Object.fromEntries(
      Object.entries(meta.props).map(([key, val]) => [
        key,
        (val as { default: unknown }).default,
      ])
    )
  }

  const newSection: Section = {
    id: uuidv4(),
    name,
    props: defaultProps,
  }

  const updatedSections = [
    ...sections.slice(0, index),
    newSection,
    ...sections.slice(index),
  ]

  setSections(updatedSections)
}
