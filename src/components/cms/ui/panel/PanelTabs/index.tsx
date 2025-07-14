import {
  useState,
  Children,
  isValidElement,
  cloneElement,
  type ReactNode,
  type FC,
  type ReactElement,
} from 'react'
import { Box, Text } from 'grommet'
import './PanelTabs.css'
import PanelBox from '../PanelBox'

export type PanelTabTriggerProps = {
  icon?: ReactNode
  label: ReactNode
  value: string
  active?: boolean
  setActiveValue?: (value: string) => void
}

export type PanelTabsProps = {
  children: ReactNode
  defaultValue?: string
}

export type PanelTabListProps = {
  children: ReactNode
}

export type PanelTabContentProps = {
  children: ReactNode
  value: string
  activeValue?: string
}

export type PanelTabListInjectedProps = {
  activeValue?: string
  setActiveValue?: (value: string) => void
}

export const PanelTabTrigger: FC<PanelTabTriggerProps> = ({
  icon,
  label,
  value,
  active,
  setActiveValue,
}) => {
  return (
    <Box
      align="center"
      justify="center"
      gap="small"
      hoverIndicator={{ background: 'dark-2' }}
      fill
      pad={{ horizontal: 'small', vertical: 'medium' }}
      focusIndicator={false}
      className={active ? 'panel-tab-trigger--active' : 'panel-tab-trigger'}
      onClick={() => setActiveValue?.(value)}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      {icon}
      <Text size="small" margin="none">
        {label}
      </Text>
    </Box>
  )
}

export const PanelTabList: FC<
  PanelTabListProps & PanelTabListInjectedProps
> = ({ children, activeValue, setActiveValue }) => {
  return (
    <PanelBox pad="none">
      <Box direction="row">
        {Children.map(children, (child) => {
          if (
            isValidElement<PanelTabTriggerProps>(child) &&
            typeof child.props.value === 'string'
          ) {
            return cloneElement(child, {
              active: child.props.value === activeValue,
              setActiveValue,
            })
          }
          return child
        })}
      </Box>
    </PanelBox>
  )
}

export const PanelTabContent: FC<PanelTabContentProps> = ({
  children,
  value,
  activeValue,
}) => {
  const isActive = value === activeValue
  return <Box style={{ display: isActive ? 'flex' : 'none' }}>{children}</Box>
}

export const PanelTabs: FC<PanelTabsProps> = ({ children, defaultValue }) => {
  let firstValue: string | undefined = undefined

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === PanelTabList) {
      const tabListChildren = (child.props as PanelTabListProps).children
      Children.forEach(tabListChildren, (tab) => {
        if (
          isValidElement<PanelTabTriggerProps>(tab) &&
          typeof tab.props.value === 'string' &&
          !firstValue
        ) {
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
