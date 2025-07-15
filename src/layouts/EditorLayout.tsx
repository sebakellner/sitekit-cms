import { Grid, Box } from 'grommet'
import PanelPageEditor from '@components/cms/page-editor/panels/editor/PanelPageEditor'
import ComponentSelector from '@components/cms/page-editor/panels/selector/ComponentSelector'
import Sidebar from '@components/cms/page-editor/panels/sidebar/Sidebar'

interface EditorLayoutProps {
  children?: React.ReactNode
}

function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <Grid
      fill
      rows={['auto', 'flex', 'auto']}
      columns={['auto', '1fr', '3fr', '1fr']}
      areas={[
        { name: 'left-sidebar', start: [0, 1], end: [0, 1] },
        { name: 'left-panels', start: [1, 1], end: [1, 1] },
        { name: 'center-preview', start: [2, 1], end: [2, 1] },
        { name: 'right-editor', start: [3, 1], end: [3, 1] },
      ]}
    >
      <Box gridArea="left-sidebar">
        <Sidebar />
      </Box>

      <Box gridArea="left-panels">
        <ComponentSelector />
      </Box>

      <Box
        gridArea="center-preview"
        background="#212121"
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

      <Box gridArea="right-editor">
        <PanelPageEditor />
      </Box>
    </Grid>
  )
}

export default EditorLayout
