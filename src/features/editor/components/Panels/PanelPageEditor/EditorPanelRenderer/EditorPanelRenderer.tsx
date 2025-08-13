import { PanelBoxCollapsible } from '@components/cms/ui'
import EditorRenderer from '../EditorRenderer/EditorRenderer'
import type { EditorPanelRendererProps } from './EditorPanelRenderer.types'

const EditorPanelRenderer = ({
  onChange,
  groupedPanels,
}: EditorPanelRendererProps) => {
  if (!groupedPanels) return <div>No properties available</div>

  return (
    <>
      {groupedPanels.map(({ name, props }) => (
        <PanelBoxCollapsible key={name} title={name}>
          {props.map(({ key, value, config }, idx) => {
            return (
              <EditorRenderer
                key={idx}
                config={config}
                value={value}
                onChange={(newValue) => onChange(key, newValue)}
              />
            )
          })}
        </PanelBoxCollapsible>
      ))}
    </>
  )
}

export default EditorPanelRenderer
