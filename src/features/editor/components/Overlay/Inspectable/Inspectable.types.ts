export interface InspectableProps {
  id: string
  name?: string
  children: React.ReactNode
  overlayLabelPosition?: 'above' | 'below'
  showInspectorOverlay?: boolean
}
