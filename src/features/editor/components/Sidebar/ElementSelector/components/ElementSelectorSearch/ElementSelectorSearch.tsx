import { PanelBox } from '@components/cms/ui'
import { TextInput } from 'grommet'
import { Search } from 'grommet-icons'

const ElementSelectorSearch = () => (
  <PanelBox>
    <TextInput
      icon={<Search />}
      size="small"
      placeholder="Search"
      dropHeight="small"
    />
  </PanelBox>
)

export default ElementSelectorSearch
