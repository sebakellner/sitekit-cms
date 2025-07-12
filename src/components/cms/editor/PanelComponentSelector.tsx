import { Box, Heading, Text, TextInput } from 'grommet'
import { Search } from 'grommet-icons'

const ComponentSelectorItem = () => {
  return (
    <Box gap="small" round="small" flex="grow" hoverIndicator>
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
      <Box
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        gap="xsmall"
        flex="grow"
        border={{ side: 'bottom', color: 'dark-3' }}
      >
        <Heading level={5} margin="none">
          UI Section Components
        </Heading>
        <Text size="xsmall" color="dark-4">
          Select a component to add to your layout
        </Text>
      </Box>
      <Box pad="medium" gap="small" flex="grow">
        <TextInput icon={<Search />} placeholder="Search" dropHeight="small" />
      </Box>
      <Box
        pad="medium"
        gap="large"
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
