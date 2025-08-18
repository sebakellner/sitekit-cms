import { PanelBox } from '@components/cms/ui'
import { Input, Box } from '@chakra-ui/react'
import { Search } from 'lucide-react'

const ElementSelectorSearch = () => (
  <PanelBox>
    <Box position="relative" w="100%">
      <Box
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        pointerEvents="none"
      >
        <Search size={16} />
      </Box>
      <Input placeholder="Search" pl={8} variant="subtle" />
    </Box>
  </PanelBox>
)

export default ElementSelectorSearch
