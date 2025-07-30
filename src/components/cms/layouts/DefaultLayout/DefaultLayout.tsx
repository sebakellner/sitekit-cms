import { Grid, Box } from '@chakra-ui/react'
import Header from '@src/features/editor/components/Header/Header'
import type { DefaultLayoutProps } from './DefaultLayout.types'

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Grid
      templateRows="auto 1fr auto"
      templateColumns="1fr"
      templateAreas="
        'header'
        'content'
      "
      height="100vh"
      overflow="hidden"
      data-testid="default-layout"
    >
      <Box gridArea="header" data-testid="header">
        <Header />
      </Box>
      <Box gridArea="content" data-testid="content">
        {children}
      </Box>
    </Grid>
  )
}

export default DefaultLayout
