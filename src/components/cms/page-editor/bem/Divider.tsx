import { Box } from 'grommet'
import { BEM_BORDER_COLOR } from '@constants/inspector.ts'

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
