import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { InspectorOverlay } from './InspectorOverlay'
import { Box } from 'grommet'
import { getComponentLabel } from '@utils/getComponentLabel'
import { usePageStore } from '@stores/usePageStore'

interface InspectableProps {
  id: string
  name?: string
  children: ReactNode
  overlayLabelPosition?: 'above' | 'below'
  showInspectorOverlay?: boolean
}

export const Inspectable: React.FC<InspectableProps> = ({
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
