import React from 'react'
import type { ReactNode } from 'react'
import { Box, Text } from 'grommet'
import { Layers } from 'lucide-react'

interface InspectorOverlayProps {
  label: string
  showOverlay?: boolean
  isSelected?: boolean
  onSelect?: () => void
  children: ReactNode
  overlayLabelPosition?: 'above' | 'below'
}

export const InspectorOverlay: React.FC<InspectorOverlayProps> = ({
  label,
  showOverlay = false,
  isSelected = false,
  onSelect,
  children,
  overlayLabelPosition = 'above',
}) => {
  const BORDER_COLOR = '#007df0'
  const overlayBorder = isSelected
    ? `2px solid ${BORDER_COLOR}`
    : `1px solid ${BORDER_COLOR}`
  const labelBg = isSelected ? BORDER_COLOR : 'transparent'
  const labelColor = isSelected ? '#fff' : BORDER_COLOR
  const labelIconColor = isSelected ? '#fff' : BORDER_COLOR

  const getLabelStyle = (position: 'above' | 'below') => ({
    position: 'absolute' as const,
    left: 0,
    top: position === 'above' ? -24 : '100%',
    marginTop: position === 'below' ? 0 : undefined,
    background: labelBg,
    color: labelColor,
    padding: '4px 8px',
    fontSize: 12,
    zIndex: 3,
    pointerEvents: 'none' as const,
  })

  return (
    <Box style={{ position: 'relative' }}>
      {showOverlay && (
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: overlayBorder,
            pointerEvents: onSelect ? 'auto' : 'none',
            zIndex: 2,
            transition: 'border-color 0.2s',
            cursor: 'default',
          }}
          onClick={onSelect}
          hoverIndicator={false}
          focusIndicator={false}
        />
      )}
      {showOverlay && (
        <Box
          direction="row"
          align="center"
          gap="xsmall"
          justify="center"
          style={getLabelStyle(overlayLabelPosition)}
          round={{
            corner: overlayLabelPosition === 'above' ? 'top' : 'bottom',
            size: 'xsmall',
          }}
          hoverIndicator={false}
          focusIndicator={false}
        >
          <Layers size={12} color={labelIconColor} />
          <Text size="xsmall">{label}</Text>
        </Box>
      )}
      <Box style={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  )
}
