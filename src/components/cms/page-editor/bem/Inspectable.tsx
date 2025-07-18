import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { InspectorOverlay } from './InspectorOverlay'
import { Box } from 'grommet'
import { useInspectorStore } from '@stores/useInspectorStore'
import type { InspectorStore } from '@stores/useInspectorStore'
import { getComponentLabel } from '@utils/getComponentLabel'

interface InspectableProps {
  label?: string
  children: ReactNode
  overlayLabelPosition?: 'above' | 'below'
}

export const Inspectable: React.FC<InspectableProps> = ({
  label,
  children,
  overlayLabelPosition = 'above',
}) => {
  const computedLabel: string = label ?? getComponentLabel(children)
  const [hovered, setHovered] = useState(false)

  const selectedLabel = useInspectorStore(
    (state: InspectorStore) => state.selectedLabel
  )
  const setSelectedLabel = useInspectorStore(
    (state: InspectorStore) => state.setSelectedLabel
  )
  const isSelected = selectedLabel === computedLabel
  const showOverlay = hovered || isSelected

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)
  const handleSelect = () => setSelectedLabel(computedLabel)

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="100%"
    >
      <InspectorOverlay
        label={computedLabel || ''}
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
