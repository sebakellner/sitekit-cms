import CardGrid from '@components/site/CardGrid'
import Footer from '@components/site/Footer'
import Hero from '@components/site/Hero'
import InfoText from '@components/site/InfoText'
import Nav from '@components/site/Nav'
import { Box } from 'grommet'
import { Inspectable } from '../bem/Inspectable'

const PageCanvas = () => {
  const sections = [
    { label: 'nav__section', component: <Nav /> },
    { label: 'hero__section', component: <Hero /> },
    { label: 'card-grid__section', component: <CardGrid /> },
    { label: 'info-text__section', component: <InfoText /> },
    { label: 'footer__section', component: <Footer /> },
  ]

  return (
    <Box
      style={{ display: 'block' }}
      fill
      background="white"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
    >
      {sections.map(({ label, component }, idx) => (
        <Inspectable
          key={label}
          label={label}
          overlayLabelPosition={idx === 0 ? 'below' : 'above'}
        >
          {component}
        </Inspectable>
      ))}
    </Box>
  )
}

export default PageCanvas
