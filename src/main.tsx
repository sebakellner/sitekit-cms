import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Grommet } from 'grommet'
import { hpe } from 'grommet-theme-hpe'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Grommet theme={hpe} full>
      <App />
    </Grommet>
  </StrictMode>
)
