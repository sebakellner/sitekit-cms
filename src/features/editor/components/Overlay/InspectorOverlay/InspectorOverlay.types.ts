export interface InspectorOverlayProps {
  label: string
  showOverlay?: boolean
  isSelected?: boolean
  onSelect?: () => void
  children: React.ReactNode
  overlayLabelPosition?: 'above' | 'below'
}
