import { componentsRegistry } from '@registry/componentRegistry'
import { v4 as uuidv4 } from 'uuid'

import type { ComponentMeta } from '@components/site/types'
import { extractDefaultProps } from '@src/features/editor/utils/extractDefaultProps'
import type { Section } from '../schemas/section.schema'

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

  const defaultProps = extractDefaultProps(meta?.props)

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
