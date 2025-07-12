import { Header as GrommetHeader, Text } from 'grommet'

const Header = () => {
  return (
    <GrommetHeader
      background={'dark-1'}
      pad="medium"
      align="center"
      justify="start"
      width="full"
    >
      <Text size="large" color="white">
        SKBuilder
      </Text>
    </GrommetHeader>
  )
}

export default Header
