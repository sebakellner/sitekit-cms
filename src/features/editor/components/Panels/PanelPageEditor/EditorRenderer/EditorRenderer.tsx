import type { ComponentPropConfig } from '@features/editor/types/editor.types'
import * as React from 'react'

type Props = {
  propConfig: ComponentPropConfig
  value: unknown
  onChange: (val: unknown) => void
}

const editorMap: Record<
  string,
  (
    title: string,
    value: unknown,
    onChange: (val: unknown) => void,
    options?: string[]
  ) => React.ReactElement
> = {
  text: (title, value, onChange) => (
    <div style={{ marginBottom: '1rem' }}>
      <label
        style={{
          fontSize: '0.9rem',
          display: 'block',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </label>
      <input
        type="text"
        value={value as string}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  ),

  colorPicker: (title, value, onChange) => (
    <div style={{ marginBottom: '1rem' }}>
      <label
        style={{
          fontSize: '0.9rem',
          display: 'block',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </label>
      <input
        type="color"
        value={value as string}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          height: '40px',
          border: 'none',
          padding: 0,
        }}
      />
    </div>
  ),

  jsonEditor: (title, value, onChange) => (
    <div style={{ marginBottom: '1rem' }}>
      <label
        style={{
          fontSize: '0.9rem',
          display: 'block',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </label>
      <textarea
        value={JSON.stringify(value, null, 2)}
        onChange={(e) => {
          try {
            onChange(JSON.parse(e.target.value))
          } catch (error) {
            console.error('Failed to parse JSON:', error)
          }
        }}
        style={{
          width: '100%',
          height: '100px',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontFamily: 'monospace',
        }}
      />
    </div>
  ),

  select: (title, value, onChange, options = []) => (
    <div style={{ marginBottom: '1rem' }}>
      <label
        style={{
          fontSize: '0.9rem',
          display: 'block',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </label>
      <select
        value={value as string}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  ),
}

const EditorRenderer = ({ propConfig, value, onChange }: Props) => {
  const title = propConfig.title ?? 'Property'
  const { editor, options } = propConfig

  const renderEditor = editorMap[editor]

  if (!renderEditor) return null

  return renderEditor(title, value, onChange, options)
}

export default EditorRenderer
