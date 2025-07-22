import React from 'react'
import { Inspectable } from '../bem/Inspectable'
import { sectionList } from '@lib/sectionMap'
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
  const meta = sectionList.find(
    (item) => item.id === name || item.name === name
  )
  const Component = meta?.component

  if (!Component) return null

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
