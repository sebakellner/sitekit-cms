import { Grid, Box } from 'grommet'
import PanelPageEditor from '@components/cms/page-editor/panels/editor/PanelPageEditor'
import ElementSelector from '@components/cms/page-editor/panels/sidebar/selector/ElementSelector'
import Sidebar from '@components/cms/page-editor/panels/sidebar/Sidebar'
import PageCanvas from '@components/cms/page-editor/canvas/PageCanvas'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  closestCorners,
} from '@dnd-kit/core'
import { usePageStore } from '@stores/usePageStore'
import { arrayMove } from '@dnd-kit/sortable'
import { useCallback } from 'react'

interface EditorLayoutProps {
  children?: React.ReactNode
}

function EditorLayout({ children }: EditorLayoutProps) {
  const sections = usePageStore((state) => state.sections)
  const setSections = usePageStore((state) => state.setSections)
  const addSection = usePageStore((state) => state.addSection)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  const handleDragEndCb = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event

      const insertSectionAt = (id: string, index: number) => {
        const sectionId = String(id).startsWith('selector-')
          ? String(id).replace('selector-', '')
          : id

        const uniqueId = `${sectionId}-${Date.now()}`

        const newSection = {
          id: uniqueId,
          name: sectionId,
          props: {},
        }

        const newSections = [...sections]
        newSections.splice(index, 0, newSection)
        setSections(newSections)
      }

      if (over) {
        const isNewSection =
          String(active.id).startsWith('selector-') ||
          !sections.some((s) => s.id === active.id)

        if (isNewSection) {
          if (sections.length === 0) {
            const sectionId = String(active.id).startsWith('selector-')
              ? String(active.id).replace('selector-', '')
              : (active.id as string)

            addSection(sectionId, {})
          } else {
            const overIndex = sections.findIndex((s) => s.id === over.id)
            if (overIndex !== -1) {
              insertSectionAt(active.id as string, overIndex)
            } else {
              insertSectionAt(active.id as string, sections.length)
            }
          }
        } else {
          const oldIndex = sections.findIndex((s) => s.id === active.id)
          const newIndex = sections.findIndex((s) => s.id === over.id)

          if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
            setSections(arrayMove(sections, oldIndex, newIndex))
          }
        }
      }
    },
    [sections, setSections, addSection]
  )

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEndCb}
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
          {children || <PageCanvas />}
        </Box>

        <Box gridArea="right-editor">
          <PanelPageEditor />
        </Box>
      </Grid>
    </DndContext>
  )
}

export default EditorLayout
