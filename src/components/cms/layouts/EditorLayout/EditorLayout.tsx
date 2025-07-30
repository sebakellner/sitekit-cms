import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core'
import { usePageDnD } from '@src/features/editor/hooks/usePageDnD'
import { Grid, GridItem } from '@chakra-ui/react'

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
        templateColumns="auto 1fr minmax(290px, 290px)"
        templateAreas="
          'left-sidebar center-preview right-editor'
        "
        h="100%"
        w="100%"
        overflow="hidden"
        data-testid="editor-layout"
      >
        <GridItem
          gridArea="left-sidebar"
          data-testid="left-sidebar"
          h="100%"
          display="flex"
          overflow="auto"
        >
          <Sidebar />
          <ElementSelector />
        </GridItem>
        <GridItem
          gridArea="center-preview"
          background="#212121"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          data-testid="center-preview"
        >
          <PageCanvas overSectionId={overSectionId} activeId={activeId} />
        </GridItem>
        <GridItem gridArea="right-editor" data-testid="right-editor" h="100%">
          <PanelPageEditor />
        </GridItem>
      </Grid>

      <DragOverlay>
        {isDragging && active?.data?.current?.renderDragOverlay
          ? active.data.current.renderDragOverlay()
          : null}
      </DragOverlay>
    </DndContext>
  )
}

export default EditorLayout
