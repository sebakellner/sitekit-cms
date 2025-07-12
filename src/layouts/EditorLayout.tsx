import { Grid, Box } from 'grommet'
import PanelComponentSelector from '@components/cms/editor/PanelComponentSelector'

interface EditorLayoutProps {
  children?: React.ReactNode
}

function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <Grid
      fill
      rows={['auto', 'flex', 'auto']}
      columns={['0.8fr', '3fr', '1fr']}
      areas={[
        { name: 'main-left', start: [0, 1], end: [0, 1] },
        { name: 'main-center', start: [1, 1], end: [1, 1] },
        { name: 'main-right', start: [2, 1], end: [2, 1] },
      ]}
    >
      <Box
        gridArea="main-left"
        background="dark-1"
        align="center"
        justify="start"
        border={{ side: 'right', color: 'dark-2' }}
      >
        <PanelComponentSelector />
      </Box>

      <Box
        gridArea="main-center"
        background="light-2"
        align="center"
        justify="center"
      >
        {children || (
          <>
            <h3 style={{ margin: '0 0 16px 0' }}>Sección 2</h3>
            <p style={{ margin: 0, textAlign: 'center' }}>
              Segunda parte de la fila dividida
            </p>
          </>
        )}
      </Box>

      <Box
        gridArea="main-right"
        background="dark-1"
        pad="large"
        align="center"
        justify="center"
        border={{ side: 'left', color: 'dark-2' }}
      >
        <h3 style={{ margin: '0 0 16px 0' }}>Sección 3</h3>
        <p style={{ margin: 0, textAlign: 'center' }}>
          Tercera parte de la fila dividida
        </p>
      </Box>
    </Grid>
  )
}

export default EditorLayout
