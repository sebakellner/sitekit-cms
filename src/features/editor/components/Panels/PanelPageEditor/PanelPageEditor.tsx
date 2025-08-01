import { Box, Heading, Text } from 'grommet'
import { Layers } from 'lucide-react'
import { useSectionStore } from '@features/editor/store/section/useSectionStore'
import { PanelBox, PanelBoxScroll, PanelWrapper } from '@components/cms/ui'
import EditorPanelRenderer from './EditorPanelRenderer/EditorPanelRenderer'
import { useComponentMeta } from '@features/editor/hooks/useComponentMeta'
import type { Section } from '@features/editor/schemas/section.schema'

const PanelPageEditor = () => {
  const selectedId = useSectionStore((s) => s.selectedId)
  const section = useSectionStore((s) =>
    s.sections.find((sec): sec is Section => sec.id === selectedId)
  )

  const { meta } = useComponentMeta(section?.name ?? '')

  const updateProps = useSectionStore((s) => s.updateSectionProps)

  if (!section || !meta) {
    return (
      <PanelWrapper borderSide="left" h="100%">
        <PanelBox gap={4} align="center" justify="center">
          <Heading level={3} margin="none">
            Editor
          </Heading>
          <Text color="dark-4">Select component to start!</Text>
        </PanelBox>
      </PanelWrapper>
    )
  }

  return (
    <PanelWrapper borderSide="left" h="100%">
      <PanelBox>
        <Box direction="row" gap="xsmall" align="center">
          <Layers size={16} />
          <Heading level={5} margin="none">
            {section.name ?? 'Select a component'}
          </Heading>
        </Box>

        <Text size="xsmall" color="dark-4">
          Edit the properties of the {section.name} component
        </Text>
      </PanelBox>

      <PanelBoxScroll p={0} gap={0}>
        <EditorPanelRenderer
          meta={meta}
          values={section.props}
          onChange={(key, value) => updateProps(section.id, { [key]: value })}
        />
      </PanelBoxScroll>
    </PanelWrapper>
  )
}

export default PanelPageEditor
