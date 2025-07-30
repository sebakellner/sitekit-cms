import { Children, isValidElement, cloneElement, type FC } from 'react'
import { Box } from '@chakra-ui/react'

import type {
  PanelTabListInjectedProps,
  PanelTabListProps,
} from './PanelTabList.types'
import type { PanelTabTriggerProps } from '../PanelTabTrigger/PanelTabTrigger.types'

import { PanelBox } from '@components/cms/ui'

const PanelTabList: FC<PanelTabListProps & PanelTabListInjectedProps> = ({
  children,
  activeValue,
  setActiveValue,
}) => {
  return (
    <PanelBox pad="none">
      <Box display="flex" flexDirection="row">
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

export default PanelTabList
