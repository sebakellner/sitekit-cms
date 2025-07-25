import { Box, Heading, Text } from 'grommet'
import { useAllComponentMetas } from '@hooks/useAllComponentMetas'
import { SELECTOR_PREFIX } from '@constants/DnD'

import type { ElementSelectorItemProps } from './ElementSelectorItem'
import ElementSelectorSearchInput from './ElementSelectorSearchInput'
import DraggableSelectorItem from './DraggableSelectorItem'

import {
  PanelBox,
  PanelBoxCollapsible,
  PanelBoxScroll,
  PanelWrapper,
} from '@components/cms/ui'

import ElementSelectorItem from './ElementSelectorItem'

const ElementSelector = () => {
  const { metas, loading } = useAllComponentMetas()

  const categorized: Record<string, ElementSelectorItemProps[]> = {}
  metas.forEach((meta) => {
    const category = meta.category || 'Other'
    if (!categorized[category]) categorized[category] = []
    categorized[category].push({
      title: meta.name,
      description: meta.description || '',
      preview: meta.preview,
    })
  })

  if (loading) return <PanelWrapper>Loading...</PanelWrapper>

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
            <PanelBoxCollapsible
              key={category}
              title={category}
              collapsedGap="small"
            >
              {items.map((item) => (
                <DraggableSelectorItem
                  key={`${SELECTOR_PREFIX}${item.title}`}
                  id={`${SELECTOR_PREFIX}${item.title}`}
                >
                  <ElementSelectorItem {...item} />
                </DraggableSelectorItem>
              ))}
            </PanelBoxCollapsible>
          ))}
        </PanelBoxScroll>
      </Box>
    </PanelWrapper>
  )
}

export default ElementSelector
