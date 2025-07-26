import { TipContent } from '@components/cms/ui'
import { Box, Button, Tip } from 'grommet'
import type { SidebarLinkProps } from './SidebarLink.types'

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

export default SidebarLink
