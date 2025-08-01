import { PanelBoxCollapsible } from '@components/cms/ui'
import EditorRenderer from '../EditorRenderer/EditorRenderer'
import type { EditorPanelRendererProps } from './EditorPanelRenderer.types'

const EditorPanelRenderer = ({
  meta,
  values,
  onChange,
}: EditorPanelRendererProps) => {
  if (!meta.panels) return null

  return (
    <>
      {meta.panels.map(({ id, title, fields }) => (
        <PanelBoxCollapsible key={id} title={title}>
          {fields.map((fieldKey) => {
            const propConfig = meta.props[fieldKey]

            if (!propConfig) return null

            const configWithTitle = {
              ...propConfig,
              title: propConfig.title ?? fieldKey,
            }

            return (
              <EditorRenderer
                key={fieldKey}
                propConfig={configWithTitle}
                value={values[fieldKey]}
                onChange={(val) => onChange(fieldKey, val)}
              />
            )
          })}
        </PanelBoxCollapsible>
      ))}
    </>
  )
}

export default EditorPanelRenderer
