import { v4 as uuidv4 } from 'uuid'

import CardGrid from '@components/site/CardGrid'
import Footer from '@components/site/Footer'
import Hero from '@components/site/Hero'
import InfoText from '@components/site/InfoText'
import Nav from '@components/site/Nav'
import { Box } from 'grommet'
import { Inspectable } from '../bem/Inspectable'

const PageCanvas = () => {
  const sections = [
    { component: <Nav /> },
    { component: <Hero /> },
    { component: <CardGrid /> },
    { component: <InfoText /> },
    { component: <Footer /> },
  ]

  return (
    <Box
      style={{ display: 'block' }}
      fill
      background="white"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
    >
      {sections.map(({ component }, idx) => (
        <Inspectable
          key={uuidv4()}
          overlayLabelPosition={idx === 0 ? 'below' : 'above'}
        >
          {component}
        </Inspectable>
      ))}
    </Box>
  )
}

export default PageCanvas
