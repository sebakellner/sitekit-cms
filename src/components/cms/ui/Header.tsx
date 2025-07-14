import { Header as GrommetHeader, Text } from 'grommet'

const Header = () => {
  return (
    <GrommetHeader
      background={'dark-1'}
      pad={{ horizontal: 'medium', vertical: 'small' }}
      align="center"
      justify="start"
      width="full"
      border={{ side: 'bottom', color: 'dark-2' }}
    >
      <Text size="large" color="white">
        SKBuilder
      </Text>
    </GrommetHeader>
  )
}

export default Header
