import { Grid, GridItem } from '@chakra-ui/react'
import Header from '@src/features/editor/components/Header/Header'
import type { DefaultLayoutProps } from './DefaultLayout.types'

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Grid
      templateAreas={`"header" "content"`}
      templateRows="auto 1fr"
      templateColumns="1fr"
      h="100vh"
      w="100vw"
      overflow="hidden"
      gap={0}
      data-testid="default-layout"
    >
      <GridItem gridArea="header" data-testid="header">
        <Header />
      </GridItem>
      <GridItem
        gridArea="content"
        data-testid="content"
        h="100%"
        overflow="auto"
      >
        {children}
      </GridItem>
    </Grid>
  )
}

export default DefaultLayout
