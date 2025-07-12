import { Box, Heading, Text, TextInput } from 'grommet'
import { Search } from 'grommet-icons'
import PanelBox from '../ui/PanelBox'

const ComponentSelectorItem = () => {
  return (
    <Box gap="small" round="small" flex="grow" hoverIndicator={true}>
      <Box
        overflow="hidden"
        height="xsmall"
        background="dark-3"
        round="small"
      ></Box>
      <Box gap="xsmall">
        <Heading level={6} size="small" margin="none">
          Hero Component
        </Heading>
        <Text size="xsmall" color="light-4">
          A full-width hero section with a background image and text overlay.
        </Text>
      </Box>
    </Box>
  )
}

const PanelComponentSelector = () => {
  return (
    <Box justify="start">
      <PanelBox>
        <Heading level={5} margin="none">
          UI Section Components
        </Heading>
        <Text size="xsmall" color="dark-4">
          Select a component to add to your layout
        </Text>
      </PanelBox>

      <PanelBox borderSide={false}>
        <TextInput
          icon={<Search />}
          size="small"
          placeholder="Search"
          dropHeight="small"
        />
      </PanelBox>

      <Box
        pad="medium"
        gap="medium"
        overflow={{ vertical: 'scroll' }}
        className="custom-scrollbar"
      >
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
      </Box>
    </Box>
  )
}

export default PanelComponentSelector
