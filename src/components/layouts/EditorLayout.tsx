import { Grid, Box } from 'grommet'

interface EditorLayoutProps {
  children?: React.ReactNode
}

function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <Grid
      fill
      rows={['auto', 'flex', 'auto']}
      columns={['1fr', '3fr', '1fr']}
      areas={[
        { name: 'main-left', start: [0, 1], end: [0, 1] },
        { name: 'main-center', start: [1, 1], end: [1, 1] },
        { name: 'main-right', start: [2, 1], end: [2, 1] },
      ]}
    >
      <Box
        gridArea="main-left"
        background="light-1"
        pad="large"
        align="center"
        justify="center"
      >
        <h3 style={{ margin: '0 0 16px 0' }}>Sección 1</h3>
        <p style={{ margin: 0, textAlign: 'center' }}>
          Primera parte de la fila dividida
        </p>
      </Box>

      <Box
        gridArea="main-center"
        background="light-2"
        pad="large"
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
        background="light-3"
        pad="large"
        align="center"
        justify="center"
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
