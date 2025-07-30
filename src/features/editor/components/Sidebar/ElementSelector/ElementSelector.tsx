import { Box, Heading, Text } from 'grommet'
import { useAllComponentMetas } from '@src/features/editor/hooks/useAllComponentMetas'
import { SELECTOR_PREFIX } from '@src/features/editor/constants/DnD'

import {
  PanelBox,
  PanelBoxCollapsible,
  PanelBoxScroll,
  PanelWrapper,
} from '@components/cms/ui'

import {
  DraggableSelectorItem,
  ElementSelectorItem,
  ElementSelectorSearch,
  type ElementSelectorItemProps,
} from './components'

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
    <PanelWrapper borderSide="right" width={'290px'} fill={false}>
      <PanelBox>
        <Heading level={5} margin="none">
          UI Section Components
        </Heading>
        <Text size="xsmall" color="dark-4">
          Select a component to add to your layout
        </Text>
      </PanelBox>

      <ElementSelectorSearch />

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
