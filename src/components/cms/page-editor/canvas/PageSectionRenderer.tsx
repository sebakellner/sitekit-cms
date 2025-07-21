import React from 'react'
import { Inspectable } from '../bem/Inspectable'
import { sectionMap } from '@lib/sectionMap'
import SortableSection from './SortableSection'

type PageSectionRendererProps = {
  id: string
  name: string
  props: Record<string, unknown>
  idx: number
}

const PageSectionRenderer: React.FC<PageSectionRendererProps> = ({
  id,
  name,
  props,
  idx,
}) => {
  if (!(name in sectionMap)) return null
  const section = sectionMap[name as keyof typeof sectionMap]
  if (!section || !section.component) return null
  const Component = section.component

  return (
    <SortableSection id={id} key={id}>
      <Inspectable
        id={id}
        name={name}
        overlayLabelPosition={idx === 0 ? 'below' : 'above'}
      >
        <Component {...props} />
      </Inspectable>
    </SortableSection>
  )
}

export default PageSectionRenderer
