import React from 'react'

import { useComponentMeta } from '@hooks/useComponentMeta'
import type { PageSectionRendererProps } from './PageSectionRenderer.types'
import { SortableSection } from '../SortableSection'
import { Divider, Inspectable } from '../../Overlay'

const PageSectionRenderer: React.FC<PageSectionRendererProps> = ({
  id,
  name,
  props,
  idx,
  showDivider,
}) => {
  const { loading, meta } = useComponentMeta(name)

  if (loading || !meta) return null

  const Component = meta.component

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
