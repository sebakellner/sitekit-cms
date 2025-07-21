import { TextInput } from 'grommet'
import { Search } from 'grommet-icons'

const ElementSelectorSearchInput = () => (
  <TextInput
    icon={<Search />}
    size="small"
    placeholder="Search"
    dropHeight="small"
  />
)

export default ElementSelectorSearchInput
