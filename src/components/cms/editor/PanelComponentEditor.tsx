import { Box, FormField, Heading, Text, TextInput } from 'grommet'
import PanelBox from '../ui/PanelBox'
import PanelBoxScroll from '../ui/PanelBoxScroll'

const PanelComponentEditor = () => {
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
        <PanelBox>
          <Heading level={6} size="small" margin="none">
            Content
          </Heading>
          <FormField label="Title">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Description">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Footnote">
            <TextInput placeholder="Enter text here" />
          </FormField>
        </PanelBox>

        <PanelBox>
          <Heading level={6} size="small" margin="none">
            Colors & Style
          </Heading>
          <FormField label="Title">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Description">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Footnote">
            <TextInput placeholder="Enter text here" />
          </FormField>
        </PanelBox>
        <PanelBox>
          <Heading level={6} size="small" margin="none">
            Images
          </Heading>
          <FormField label="Title">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Description">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Footnote">
            <TextInput placeholder="Enter text here" />
          </FormField>
        </PanelBox>
        <PanelBox>
          <Heading level={6} size="small" margin="none">
            Layout
          </Heading>
          <FormField label="Title">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Description">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Footnote">
            <TextInput placeholder="Enter text here" />
          </FormField>
        </PanelBox>
        <PanelBox borderSide={false}>
          <Heading level={6} size="small" margin="none">
            Advanced
          </Heading>
          <FormField label="Title">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Description">
            <TextInput placeholder="Enter text here" />
          </FormField>
          <FormField label="Footnote">
            <TextInput placeholder="Enter text here" />
          </FormField>
        </PanelBox>
      </PanelBoxScroll>
    </Box>
  )
}

export default PanelComponentEditor
