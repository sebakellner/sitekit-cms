import { Footer as GrommetFooter, Box, Text } from 'grommet'

function Footer() {
  return (
    <GrommetFooter
      background="dark-1"
      pad="medium"
      border={{ side: 'top', color: 'dark-2' }}
    >
      <Box direction="row" justify="end" align="center" width="full" responsive>
        <Text color="dark-3" size="small">
          © 2025 SKBuilder
        </Text>
      </Box>
    </GrommetFooter>
  )
}

export default Footer
