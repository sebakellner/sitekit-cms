import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Box, Heading, Text } from '@chakra-ui/react'

import { SELECTOR_PREFIX } from '@src/features/editor/constants/DnD'
import { useSectionStore } from '@features/editor/store/section/useSectionStore'
import type { PageCanvasProps } from './PageCanvas.types'
import { DroppableCanvas } from '../DroppableCanvas'
import { PageSectionRenderer } from '../PageSectionRenderer'
import { Grommet } from 'grommet'

const PageCanvas = ({ overSectionId, activeId }: PageCanvasProps) => {
  const sections = useSectionStore((state) => state.sections)

  const sectionIds = sections.map((s) => s.id)
  const isDraggingFromSelector =
    activeId && String(activeId).startsWith(SELECTOR_PREFIX)

  return (
    <Box
      display="block"
      height="100%"
      background="white"
      overflowY="auto"
      overflowX="hidden"
      data-testid="page-canvas"
    >
      <Grommet>
        <SortableContext
          items={sectionIds}
          strategy={verticalListSortingStrategy}
        >
          <DroppableCanvas>
            {sections.map(({ id, name, props }, idx) => (
              <PageSectionRenderer
                key={id}
                id={id}
                name={name}
                props={props}
                idx={idx}
                showDivider={!!(isDraggingFromSelector && overSectionId === id)}
              />
            ))}
          </DroppableCanvas>
        </SortableContext>
      </Grommet>
      {sectionIds.length === 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
        >
          <Box display="flex" flexDirection="column" textAlign="center" p={4}>
            <Heading size="lg" m={0} mb={2} color="gray.950">
              Start by adding sections
            </Heading>
            <Text color="gray.600">
              Add new layout from the UI Section Components
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default PageCanvas
