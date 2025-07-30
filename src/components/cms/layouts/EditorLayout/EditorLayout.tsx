import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core'
import { usePageDnD } from '@src/features/editor/hooks/usePageDnD'
import { Grid, Box } from '@chakra-ui/react'

import {
  ElementSelector,
  PageCanvas,
  PanelPageEditor,
  Sidebar,
} from '@src/features/editor'

function EditorLayout() {
  const {
    sensors,
    overSectionId,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
    activeId,
    active,
    isDragging,
  } = usePageDnD()

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <Grid
        templateRows="auto 1fr auto"
        templateColumns="minmax(52px, 52px) minmax(270px, 270px) 1fr minmax(290px, 290px)"
        templateAreas="
          'left-sidebar left-panels center-preview right-editor'
        "
        height="100vh"
        overflow="hidden"
        data-testid="editor-layout"
      >
        <Box gridArea="left-sidebar" data-testid="left-sidebar">
          <Sidebar />
        </Box>
        <Box gridArea="left-panels" data-testid="left-panels">
          <ElementSelector />
        </Box>
        <Box
          gridArea="center-preview"
          background="#212121"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          data-testid="center-preview"
        >
          <PageCanvas overSectionId={overSectionId} activeId={activeId} />
        </Box>
        <Box gridArea="right-editor" data-testid="right-editor">
          <PanelPageEditor />
        </Box>
      </Grid>

      <DragOverlay data-testid="drag-overlay">
        {isDragging && active?.data?.current?.renderDragOverlay
          ? active.data.current.renderDragOverlay()
          : null}
      </DragOverlay>
    </DndContext>
  )
}

export default EditorLayout
