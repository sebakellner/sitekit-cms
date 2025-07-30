import { Box, Button } from 'grommet'
import type { SidebarLinkProps } from './SidebarLink.types'

const SidebarLink = ({
  icon,
  active,
  label,
  onClick,
}: SidebarLinkProps & { onClick?: () => void }) => (
  <Button plain hoverIndicator={true} onClick={onClick}>
    <Box
      align="center"
      gap="small"
      pad="small"
      aria-label={label}
      background={active ? 'dark-3' : undefined}
    >
      {icon}
    </Box>
  </Button>
)

export default SidebarLink
