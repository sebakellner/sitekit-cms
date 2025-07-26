import { Box } from 'grommet'
import { BEM_BORDER_COLOR } from '@src/features/editor/constants/inspector'

const Divider: React.FC = () => (
  <Box
    height="4px"
    width="100%"
    background={BEM_BORDER_COLOR}
    margin={{ vertical: '2px' }}
    round="xsmall"
  />
)

export default Divider
