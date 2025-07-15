import { Grid, Box } from 'grommet'
import Header from '@components/cms/ui/Header'

interface DefaultLayoutProps {
  children?: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Grid
      fill
      rows={['auto', 'flex', 'auto']}
      columns={['1fr']}
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'content', start: [0, 1], end: [0, 1] },
      ]}
    >
      <Box gridArea="header">
        <Header />
      </Box>
      <Box gridArea="content">{children}</Box>
    </Grid>
  )
}

export default DefaultLayout
