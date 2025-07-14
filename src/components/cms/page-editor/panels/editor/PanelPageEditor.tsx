import { Box, FormField, Heading, Text, TextInput } from 'grommet'
import PanelBox from '@components/cms/ui/PanelBox'
import PanelBoxScroll from '@components/cms/ui/PanelBoxScroll'
import PanelBoxCollapsable from '@components/cms/ui/PanelBoxCollapsable'

const PanelPageEditor = () => {
  return (
    <Box width="full">
      <PanelBox>
        <Heading level={5} margin="none">
          Component Editor
        </Heading>
        <Text size="xsmall" color="dark-4">
          Edit the properties of the selected component
        </Text>
      </PanelBox>

      <PanelBoxScroll gap="none" pad="none">
        <PanelBoxCollapsable title="General Settings">
          <FormField label="Title">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Description">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Footnote">
            <TextInput placeholder="Enter text here" />
          </FormField>
        </PanelBoxCollapsable>

        <PanelBoxCollapsable title="Styling">
          <FormField label="Background Color">
            <TextInput placeholder="Enter color code" />
          </FormField>
          <FormField label="Text Color">
            <TextInput placeholder="Enter color code" />
          </FormField>
          <FormField label="Padding">
            <TextInput placeholder="Enter padding value" />
          </FormField>
        </PanelBoxCollapsable>

        <PanelBoxCollapsable title="Advanced Settings" borderSide={false}>
          <FormField label="Custom CSS">
            <TextInput placeholder="Enter custom CSS" />
          </FormField>
          <FormField label="JavaScript">
            <TextInput placeholder="Enter JavaScript code" />
          </FormField>
          <FormField label="Data Attributes">
            <TextInput placeholder="Enter data attributes" />
          </FormField>
        </PanelBoxCollapsable>
      </PanelBoxScroll>
    </Box>
  )
}

export default PanelPageEditor
