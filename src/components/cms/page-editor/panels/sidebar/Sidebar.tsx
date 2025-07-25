import { PanelBox, PanelWrapper } from '@components/cms/ui'
import TipContent from '@components/cms/ui/TipContent'
import { Box, Button, Nav, Tip } from 'grommet'
import {
  LayoutTemplate,
  Plus,
  Puzzle,
  Settings,
  StickyNote,
} from 'lucide-react'

const LINKS_DATA = [
  { icon: <Plus size={20} />, label: 'Add Elements' },
  { icon: <StickyNote size={20} />, label: 'Pages' },
  { icon: <Puzzle size={20} />, label: 'Components' },
  { icon: <LayoutTemplate size={20} />, label: 'Templates' },
]

export type SidebarProps = {
  links?: {
    icon: React.ReactNode
    label: string
    active?: boolean
  }[]
} & React.ComponentProps<typeof PanelWrapper>

export type SidebarLinkProps = {
  icon: React.ReactNode
  active?: boolean
  label?: string
} & React.ComponentProps<typeof Button>

const SidebarLink = ({
  icon,
  active,
  label,
  onClick,
}: SidebarLinkProps & { onClick?: () => void }) => (
  <Tip
    plain
    dropProps={{ align: { left: 'right' } }}
    content={<TipContent>{label}</TipContent>}
  >
    <Button plain hoverIndicator={true} onClick={onClick}>
      <Box
        align="center"
        gap="small"
        pad="small"
        background={active ? 'dark-3' : undefined}
      >
        {icon}
      </Box>
    </Button>
  </Tip>
)

import { useState } from 'react'

const Sidebar = ({ links = LINKS_DATA }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const initial = links.findIndex((l) => l.active)
    return initial >= 0 ? initial : 0
  })

  const settingsIndex = links.length

  return (
    <PanelWrapper borderSide="right" justify="between">
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
