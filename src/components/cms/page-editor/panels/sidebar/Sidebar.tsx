import PanelBox from '@components/cms/ui/panel/PanelBox'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'
import { Box, Button, Nav } from 'grommet'
import { Add, Cube, Document, Iteration, SettingsOption } from 'grommet-icons'

const LINKS_DATA = [
  { icon: <Add />, label: 'New Component' },
  { icon: <Document />, label: 'Content' },
  { icon: <Cube />, label: 'Components', active: true },
  { icon: <Iteration />, label: 'Templates' },
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
} & React.ComponentProps<typeof Button>

const SidebarLink = ({
  icon,
  active,
  onClick,
}: SidebarLinkProps & { onClick?: () => void }) => (
  <Button plain focusIndicator={false} onClick={onClick}>
    <Box
      align="center"
      gap="small"
      pad="small"
      background={active ? 'dark-2' : undefined}
    >
      {icon}
    </Box>
  </Button>
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
      <PanelBox borderSide="bottom" pad="none" flex={false}>
        <Nav gap="small">
          {links?.map((link, index) => (
            <SidebarLink
              key={index}
              icon={link.icon}
              label={link.label}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Nav>
      </PanelBox>
      <PanelBox borderSide="top" pad="none" flex={false}>
        <SidebarLink
          icon={<SettingsOption size="large" />}
          active={activeIndex === settingsIndex}
          onClick={() => setActiveIndex(settingsIndex)}
        />
      </PanelBox>
    </PanelWrapper>
  )
}

export default Sidebar
