import { Heading, Text } from 'grommet'
import PanelBox from '@components/cms/ui/panel/PanelBox'
import PanelBoxScroll from '@components/cms/ui/panel/PanelBoxScroll'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'
import ElementSelectorItem from './ElementSelectorItem'
import type { ElementSelectorItemProps } from './ElementSelectorItem'
import { sectionMap } from '@lib/sectionMap'
import ElementSelectorSearchInput from './ElementSelectorSearchInput'

const ElementSelector = () => {
  const items: ElementSelectorItemProps[] = Object.entries(sectionMap).map(
    ([key, value]) => ({
      title: value.name || key,
      description: 'No description available',
      previewBg: 'dark-3',
    })
  )

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
        <ElementSelectorSearchInput />
      </PanelBox>

      <PanelBoxScroll>
        {items.map((item, idx) => (
          <ElementSelectorItem key={item.title + idx} {...item} />
        ))}
      </PanelBoxScroll>
    </PanelWrapper>
  )
}

export default ElementSelector
