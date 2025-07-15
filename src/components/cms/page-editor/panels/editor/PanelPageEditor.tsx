import { FormField, Heading, Text, TextArea, TextInput } from 'grommet'
import PanelBox from '@components/cms/ui/panel/PanelBox'
import PanelBoxCollapsable from '@components/cms/ui/panel/PanelBoxCollapsible'
import { Edit, Paint, SettingsOption } from 'grommet-icons'
import {
  PanelTabs,
  PanelTabList,
  PanelTabContent,
  PanelTabTrigger,
} from '@components/cms/ui/panel/PanelTabs/index'
import PanelBoxScroll from '@components/cms/ui/panel/PanelBoxScroll'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'

const PanelPageEditor = () => {
  return (
    <PanelWrapper borderSide="left">
      <PanelBox>
        <Heading level={5} margin="none">
          Component Editor
        </Heading>
        <Text size="xsmall" color="dark-4">
          Edit the properties of the selected component
        </Text>
      </PanelBox>

      <PanelTabs defaultValue="content">
        <PanelTabList>
          <PanelTabTrigger value="content" label="Content" icon={<Edit />} />
          <PanelTabTrigger value="styles" label="Styles" icon={<Paint />} />
          <PanelTabTrigger
            value="settings"
            label="Settings"
            icon={<SettingsOption />}
          />
        </PanelTabList>
        <PanelTabContent value="content">
          <PanelBoxScroll pad="none" gap="none">
            <PanelBoxCollapsable title="General Settings">
              <FormField label="Title">
                <TextInput placeholder="Enter text here" plain />
              </FormField>
              <FormField label="Description">
                <TextInput placeholder="Enter text here" />
              </FormField>
              <FormField label="Footnote">
                <TextArea placeholder="Enter text here" />
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
