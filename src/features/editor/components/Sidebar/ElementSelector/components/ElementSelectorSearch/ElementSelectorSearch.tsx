import { TextInput } from 'grommet'
import { Search } from 'grommet-icons'

const ElementSelectorSearch = () => (
  <TextInput
    icon={<Search />}
    size="small"
    placeholder="Search"
    dropHeight="small"
  />
)

export default ElementSelectorSearch
