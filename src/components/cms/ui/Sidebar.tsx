import { Avatar, Button, Sidebar as GrommetSidebar, Nav } from 'grommet'
import { Clock, Help, Projects } from 'grommet-icons'

const Sidebar = () => {
  return (
    <GrommetSidebar
      background="light-1"
      width="small"
      pad="medium"
      align="start"
      justify="start"
      header={
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      }
      footer={<Button icon={<Help />} hoverIndicator />}
    >
      <Nav gap="small">
        <Button icon={<Projects />} hoverIndicator />
        <Button icon={<Clock />} hoverIndicator />
      </Nav>
    </GrommetSidebar>
  )
}

export default Sidebar
