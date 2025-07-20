import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { InspectorOverlay } from './InspectorOverlay'
import { Box } from 'grommet'
import { useInspectorStore } from '@stores/useInspectorStore'
import type { InspectorStore } from '@stores/useInspectorStore'
import type { SelectedComponentProps } from '@stores/useInspectorStore'
import { getComponentLabel } from '@utils/getComponentLabel'
import { v4 as uuidv4 } from 'uuid'

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
  const instanceId = React.useMemo(() => uuidv4(), [])
  const computedLabel: string = label ?? getComponentLabel(children)
  const [hovered, setHovered] = useState(false)

  const selectedComponentId = useInspectorStore(
    (state: InspectorStore) => state.selectedComponentId
  )
  const setSelectedComponent = useInspectorStore(
    (state: InspectorStore) => state.setSelectedComponent
  )

  const isSelected = selectedComponentId === instanceId
  const showOverlay = hovered || isSelected

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  const handleSelect = () => {
    let propsToStore: SelectedComponentProps = null
    if (React.isValidElement(children)) {
      propsToStore = children.props as SelectedComponentProps
    }
    setSelectedComponent(instanceId, computedLabel, propsToStore)

    console.log(`Selected component: ${computedLabel} (ID: ${instanceId})`)
    console.log('Props:')
    if (propsToStore && Object.keys(propsToStore).length > 0) {
      Object.entries(propsToStore).forEach(([key, value]) => {
        console.log(`  ${key}:`, value)
      })
    } else {
      console.log('  No props found')
    }
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
