import { Box, Heading, Text } from 'grommet'
import { Input, Field } from '@chakra-ui/react'

import { Eclipse, Layers, Pencil, Settings } from 'lucide-react'
import { useSectionStore } from '@features/editor/store/section/useSectionStore'
import {
  PanelBox,
  PanelBoxCollapsible,
  PanelBoxScroll,
  PanelTabContent,
  PanelTabList,
  PanelTabs,
  PanelTabTrigger,
  PanelWrapper,
} from '@components/cms/ui'

const PanelPageEditor = () => {
  const selectedId = useSectionStore((s) => s.selectedId)
  const section = useSectionStore((s) =>
    s.sections.find((sec) => sec.id === selectedId)
  )
  const updateProps = useSectionStore((s) => s.updateSectionProps)

  if (!section)
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

  return (
    <PanelWrapper borderSide="left" h="100%">
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
          <PanelBoxScroll p={0} gap={0}>
            <PanelBoxCollapsible title="General Settings">
              {Object.entries(section.props).map(([key, value]) => (
                <Field.Root key={key}>
                  <Field.Label>
                    {key}
                    {value !== undefined && value !== null && value !== '' && (
                      <Field.RequiredIndicator />
                    )}
                  </Field.Label>
                  {typeof value === 'string' && (
                    <Input
                      placeholder="Enter text here"
                      value={value || ''}
                      onChange={(e) =>
                        updateProps(section.id, { [key]: e.target.value })
                      }
                      variant="subtle"
                      borderRadius="md"
                    />
                  )}
                  {typeof value === 'number' && (
                    <Input
                      type="number"
                      value={value || ''}
                      onChange={(e) =>
                        updateProps(section.id, {
                          [key]: parseFloat(e.target.value) || 0,
                        })
                      }
                      variant="subtle"
                      borderRadius="md"
                    />
                  )}
                  {typeof value === 'boolean' && (
                    <Box direction="row" align="center" gap="small">
                      <Text>{key}</Text>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) =>
                          updateProps(section.id, { [key]: e.target.checked })
                        }
                      />
                    </Box>
                  )}
                  {typeof value === 'object' && value !== null && (
                    <Input
                      placeholder="Enter JSON here"
                      value={JSON.stringify(value, null, 2)}
                      onChange={(e) => {
                        try {
                          updateProps(section.id, {
                            [key]: JSON.parse(e.target.value),
                          })
                        } catch (error) {
                          console.error('Failed to parse JSON:', error)
                        }
                      }}
                      variant="subtle"
                      borderRadius="md"
                    />
                  )}
                  {value === '' && (
                    <Field.ErrorText>
                      Error: Invalid value for {key}.
                    </Field.ErrorText>
                  )}
                </Field.Root>
              ))}
            </PanelBoxCollapsible>
          </PanelBoxScroll>
        </PanelTabContent>

        <PanelTabContent value="styles">
          <PanelBox borderSide="none">
            <Text size="small" color="dark-4">
              Configure the properties of your component here.
            </Text>
          </PanelBox>
        </PanelTabContent>
        <PanelTabContent value="settings">
          <PanelBox borderSide="none">
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
