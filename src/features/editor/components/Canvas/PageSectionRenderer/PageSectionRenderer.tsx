import React from 'react'
import { Inspectable } from '../../Overlay/Inspectable'
import SortableSection from '../SorteableSection/SortableSection'
import Divider from '../../Overlay/Divider'
import { useComponentMeta } from '@hooks/useComponentMeta'
import type { PageSectionRendererProps } from './PageSectionRenderer.types'

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
