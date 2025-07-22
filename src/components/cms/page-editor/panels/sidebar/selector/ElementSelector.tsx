import { Box, Heading, Text } from 'grommet'
import PanelBox from '@components/cms/ui/panel/PanelBox'
import PanelBoxScroll from '@components/cms/ui/panel/PanelBoxScroll'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'
import ElementSelectorItem from './ElementSelectorItem'
import type { ElementSelectorItemProps } from './ElementSelectorItem'
import { sectionList } from '@lib/sectionMap'
import ElementSelectorSearchInput from './ElementSelectorSearchInput'
import PanelBoxCollapsible from '@components/cms/ui/panel/PanelBoxCollapsible'

const ElementSelector = () => {
  const categorized: Record<string, ElementSelectorItemProps[]> = {}

  sectionList.forEach((meta) => {
    const category = meta.category || 'Other'
    if (!categorized[category]) categorized[category] = []
    categorized[category].push({
      title: meta.name,
      description: meta.description || 'No description available',
      preview: meta.preview || 'dark-3',
    })
  })

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

      <Box fill>
        <PanelBoxScroll pad="none" gap="none">
          {Object.entries(categorized).map(([category, items]) => (
            <PanelBoxCollapsible key={category} title={category}>
              {items.map((item, idx) => (
                <ElementSelectorItem key={item.title + idx} {...item} />
              ))}
            </PanelBoxCollapsible>
          ))}
        </PanelBoxScroll>
      </Box>
    </PanelWrapper>
  )
}

export default ElementSelector
