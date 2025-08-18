import React, { useState } from 'react'

import { Box } from 'grommet'
import { getComponentLabel } from '@src/features/editor/utils/getComponentLabel'
import type { InspectableProps } from './Inspectable.types'
import { InspectorOverlay } from '../InspectorOverlay'
import { useSectionStore } from '@features/editor/store/section/useSectionStore'

const Inspectable: React.FC<InspectableProps> = ({
  id,
  name,
  children,
  overlayLabelPosition = 'above',
  showInspectorOverlay = true,
}) => {
  const selectedId = useSectionStore((s) => s.selectedId)
  const selectSection = useSectionStore((s) => s.selectSection)

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
        sectionId={id}
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
