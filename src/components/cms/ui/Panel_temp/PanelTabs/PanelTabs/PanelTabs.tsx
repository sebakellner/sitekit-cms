import {
  useState,
  Children,
  isValidElement,
  cloneElement,
  type FC,
  type ReactElement,
} from 'react'
import { Box } from 'grommet'
import type { PanelTabsProps } from './PanelTabs.types'
import {
  PanelTabList,
  type PanelTabListInjectedProps,
  type PanelTabListProps,
} from '../PanelTabList'
import { PanelTabContent } from '../PanelTabContent'

const PanelTabs: FC<PanelTabsProps> = ({ children, defaultValue }) => {
  let firstValue: string | undefined = undefined

  function isPanelTabTrigger(
    element: unknown
  ): element is ReactElement<{ value: string }> {
    if (!isValidElement(element)) return false
    const props = (element as ReactElement).props as { value?: unknown }
    return typeof props.value === 'string'
  }

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === PanelTabList) {
      const tabListChildren = (child.props as PanelTabListProps).children
      Children.forEach(tabListChildren, (tab) => {
        if (isPanelTabTrigger(tab) && !firstValue) {
          firstValue = tab.props.value
        }
      })
    }
  })

  const [activeValue, setActiveValue] = useState(defaultValue ?? firstValue)

  return (
    <Box fill>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (child.type === PanelTabList) {
            return cloneElement(
              child as ReactElement<PanelTabListInjectedProps>,
              { activeValue, setActiveValue }
            )
          }
          if (child.type === PanelTabContent) {
            return cloneElement(
              child as ReactElement<{ activeValue: string }>,
              { activeValue }
            )
          }
        }
        return child
      })}
    </Box>
  )
}

export default PanelTabs
