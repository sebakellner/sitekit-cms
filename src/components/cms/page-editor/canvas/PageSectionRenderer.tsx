import React from 'react'
import { Inspectable } from '../bem/Inspectable'
import { sectionList } from '@lib/sectionMap'
import SortableSection from './SortableSection'
import Divider from '@components/cms/ui/Divider'

type PageSectionRendererProps = {
  id: string
  name: string
  props: Record<string, unknown>
  idx: number
  showDivider?: boolean
}

const PageSectionRenderer: React.FC<PageSectionRendererProps> = ({
  id,
  name,
  props,
  idx,
  showDivider,
}) => {
  const meta = sectionList.find(
    (item) => item.id === name || item.name === name
  )
  const Component = meta?.component

  if (!Component) return null

  return (
    <SortableSection id={id} key={id}>
      {showDivider && <Divider />}
      <Inspectable
        id={id}
        name={name}
        showInspectorOverlay={!showDivider}
        overlayLabelPosition={idx === 0 ? 'below' : 'above'}
      >
        <Component {...props} />
      </Inspectable>
    </SortableSection>
  )
}

export default PageSectionRenderer
