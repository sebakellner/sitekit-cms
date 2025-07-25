import React from 'react'

import {
  Divider,
  Inspectable,
  SortableSection,
  type PageSectionRendererProps,
} from '@features/editor'

import { useComponentMeta } from '@hooks/useComponentMeta'

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
