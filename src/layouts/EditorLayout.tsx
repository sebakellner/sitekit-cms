import { DndContext, closestCorners, type DragStartEvent } from '@dnd-kit/core'
import { useState } from 'react'
import { usePageDnD } from '@hooks/usePageDnD'
import { Grid, Box } from 'grommet'
import PanelPageEditor from '@components/cms/page-editor/panels/editor/PanelPageEditor'
import ElementSelector from '@components/cms/page-editor/panels/sidebar/selector/ElementSelector'
import Sidebar from '@components/cms/page-editor/panels/sidebar/Sidebar'
import PageCanvas from '@components/cms/page-editor/canvas/PageCanvas'

function EditorLayout() {
  const { sensors, overSectionId, handleDragEnd, handleDragOver } = usePageDnD()
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active?.id ? String(event.active.id) : null)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <Grid
        fill
        rows={['auto', 'flex', 'auto']}
        columns={[
          'minmax(52px, 52px)',
          'minmax(270px, 270px)',
          '1fr',
          'minmax(290px, 290px)',
        ]}
        areas={[
          { name: 'left-sidebar', start: [0, 1], end: [0, 1] },
          { name: 'left-panels', start: [1, 1], end: [1, 1] },
          { name: 'center-preview', start: [2, 1], end: [2, 1] },
          { name: 'right-editor', start: [3, 1], end: [3, 1] },
        ]}
      >
        <Box gridArea="left-sidebar">
          <Sidebar />
        </Box>
        <Box gridArea="left-panels">
          <ElementSelector />
        </Box>
        <Box
          gridArea="center-preview"
          background="#212121"
          align="center"
          justify="center"
        >
          <PageCanvas overSectionId={overSectionId} activeId={activeId} />
        </Box>
        <Box gridArea="right-editor">
          <PanelPageEditor />
        </Box>
      </Grid>
    </DndContext>
  )
}

export default EditorLayout
