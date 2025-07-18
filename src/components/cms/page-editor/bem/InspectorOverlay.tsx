import React from 'react'
import type { ReactNode } from 'react'

interface InspectorOverlayProps {
  label: string
  showOverlay?: boolean
  showLabel?: boolean
  isSelected?: boolean
  onSelect?: () => void
  children: ReactNode
}

export const InspectorOverlay: React.FC<InspectorOverlayProps> = ({
  label,
  showOverlay = false,
  isSelected = false,
  onSelect,
  children,
}) => {
  return (
    <div style={{ position: 'relative' }}>
      {showOverlay && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: isSelected ? '2px solid #007df0' : '1px solid #007df0',
            pointerEvents: onSelect ? 'auto' : 'none',
            zIndex: 2,
            transition: 'border-color 0.2s',
          }}
          onClick={onSelect}
        />
      )}
      {showOverlay && (
        <div
          style={{
            position: 'absolute',
            top: -24,
            left: 0,
            background: '#007df0',
            color: '#fff',
            padding: '2px 8px',
            fontSize: 12,
            zIndex: 3,
            pointerEvents: 'none',
            fontFamily: 'monospace',
            boxShadow: isSelected ? '0 2px 8px rgba(0,0,0,0.15)' : undefined,
          }}
        >
          {label}
        </div>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
