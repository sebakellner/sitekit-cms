import { Box, Heading, Text, TextInput } from 'grommet'
import { Search } from 'grommet-icons'
import PanelBox from '@components/cms/ui/panel/PanelBox'
import PanelBoxScroll from '@components/cms/ui/panel/PanelBoxScroll'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'

const ComponentSelectorItem = () => {
  return (
    <Box gap="small" round="small" flex="grow" hoverIndicator={true}>
      <Box
        overflow="hidden"
        height="130px"
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
    <PanelWrapper borderSide="right">
      <PanelBox>
        <Heading level={5} margin="none">
          UI Section Components
        </Heading>
        <Text size="xsmall" color="dark-4">
          Select a component to add to your layout
        </Text>
      </PanelBox>

      <PanelBox>
        <TextInput
          icon={<Search />}
          size="small"
          placeholder="Search"
          dropHeight="small"
        />
      </PanelBox>

      <PanelBoxScroll>
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
        <ComponentSelectorItem />
      </PanelBoxScroll>
    </PanelWrapper>
  )
}

export default PanelComponentSelector
