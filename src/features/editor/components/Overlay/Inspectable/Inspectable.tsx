import React, { useState } from 'react'

import { Box } from 'grommet'
import { getComponentLabel } from '@features/editor/utils/getComponentLabel'
import { usePageStore } from '@features/editor/store/usePageStore'
import type { InspectableProps } from './Inspectable.types'
import { InspectorOverlay } from '../InspectorOverlay'

const Inspectable: React.FC<InspectableProps> = ({
  id,
  name,
  children,
  overlayLabelPosition = 'above',
  showInspectorOverlay = true,
}) => {
  const selectedId = usePageStore((s) => s.selectedId)
  const selectSection = usePageStore((s) => s.selectSection)

  const [hovered, setHovered] = useState(false)

  const computedLabel: string = name ?? getComponentLabel(children)

  const isSelected = selectedId === id

  const showOverlay = showInspectorOverlay && (hovered || isSelected)

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  const handleSelect = () => {
    selectSection(id)
  }

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="100%"
    >
      <InspectorOverlay
        label={computedLabel}
        showOverlay={showOverlay}
        isSelected={isSelected}
        onSelect={handleSelect}
        overlayLabelPosition={overlayLabelPosition}
      >
        {children}
      </InspectorOverlay>
    </Box>
  )
}

export default Inspectable
