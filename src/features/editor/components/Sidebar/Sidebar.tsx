import { PanelBox, PanelWrapper } from '@components/cms/ui'
import { Nav } from 'grommet'
import {
  LayoutTemplate,
  Plus,
  Puzzle,
  Settings,
  StickyNote,
} from 'lucide-react'

import { useState } from 'react'
import type { SidebarProps } from './Sidebar.types'
import { SidebarLink } from './components'

const LINKS_DATA = [
  { icon: <Plus size={20} />, label: 'Add Elements' },
  { icon: <StickyNote size={20} />, label: 'Pages' },
  { icon: <Puzzle size={20} />, label: 'Components' },
  { icon: <LayoutTemplate size={20} />, label: 'Templates' },
]

const Sidebar = ({ links = LINKS_DATA }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const initial = links.findIndex((l) => l.active)
    return initial >= 0 ? initial : 0
  })

  const settingsIndex = links.length

  return (
    <PanelWrapper
      borderSide="right"
      justify="between"
      width="52px"
      fill={false}
    >
      <PanelBox borderSide={false} pad="none" flex={false}>
        <Nav gap="none">
          {links?.map(({ icon, label }, index) => (
            <SidebarLink
              key={label}
              icon={icon}
              label={label}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Nav>
      </PanelBox>
      <PanelBox borderSide="top" pad="none" flex={false}>
        <SidebarLink
          icon={<Settings size={20} />}
          label="Settings"
          active={activeIndex === settingsIndex}
          onClick={() => setActiveIndex(settingsIndex)}
        />
      </PanelBox>
    </PanelWrapper>
  )
}

export default Sidebar
