import { Box, FormField, Heading, Text, TextInput } from 'grommet'
import PanelBox from '@components/cms/ui/panel/PanelBox'
import PanelBoxCollapsable from '@components/cms/ui/panel/PanelBoxCollapsible'
import {
  PanelTabs,
  PanelTabList,
  PanelTabContent,
  PanelTabTrigger,
} from '@components/cms/ui/panel/PanelTabs/index'
import PanelBoxScroll from '@components/cms/ui/panel/PanelBoxScroll'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'
import { Eclipse, Layers, Pencil, Settings } from 'lucide-react'
import { usePageStore } from '@stores/usePageStore'

const PanelPageEditor = () => {
  const selectedId = usePageStore((s) => s.selectedId)
  const section = usePageStore((s) =>
    s.sections.find((sec) => sec.id === selectedId)
  )
  const updateProps = usePageStore((s) => s.updateSectionProps)

  if (!section) return <div>Seleccioná una sección</div>

  return (
    <PanelWrapper borderSide="left">
      <PanelBox>
        <Box direction="row" gap="xsmall" align="center">
          <Layers size={16} />
          <Heading level={5} margin="none">
            {section.name ? section.name : 'Select a component'}
          </Heading>
        </Box>

        <Text size="xsmall" color="dark-4">
          Edit the properties of the {section.name} component
        </Text>
      </PanelBox>

      <PanelTabs defaultValue="content">
        <PanelTabList>
          <PanelTabTrigger
            value="content"
            label="Content"
            icon={<Pencil size={20} />}
          />
          <PanelTabTrigger
            value="styles"
            label="Styles"
            icon={<Eclipse size={20} />}
          />
          <PanelTabTrigger
            value="settings"
            label="Settings"
            icon={<Settings size={20} />}
          />
        </PanelTabList>
        <PanelTabContent value="content">
          <PanelBoxScroll pad="none" gap="none">
            <PanelBoxCollapsable title="General Settings">
              {Object.entries(section.props).map(([key, value]) => (
                <FormField label={key} key={key}>
                  <TextInput
                    placeholder="Enter text here"
                    value={value?.toString() || ''}
                    onChange={(e) =>
                      updateProps(section.id, { [key]: e.target.value })
                    }
                    plain
                  />
                </FormField>
              ))}
            </PanelBoxCollapsable>
          </PanelBoxScroll>
        </PanelTabContent>

        <PanelTabContent value="styles">
          <PanelBox borderSide={false}>
            <Text size="small" color="dark-4">
              Configure the properties of your component here.
            </Text>
          </PanelBox>
        </PanelTabContent>
        <PanelTabContent value="settings">
          <PanelBox borderSide={false}>
            <Text size="small" color="dark-4">
              Configure the properties of your Settings here.
            </Text>
          </PanelBox>
        </PanelTabContent>
      </PanelTabs>
    </PanelWrapper>
  )
}

export default PanelPageEditor
