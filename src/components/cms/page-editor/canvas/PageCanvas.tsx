import CardGrid from '@components/site/CardGrid'
import Footer from '@components/site/Footer'
import Hero from '@components/site/Hero'
import InfoText from '@components/site/InfoText'
import Nav from '@components/site/Nav'
import { Box } from 'grommet'

const PageCanvas = () => {
  return (
    <Box
      style={{ display: 'block' }}
      fill
      background="white"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
    >
      <Nav />
      <Hero />
      <CardGrid />
      <InfoText />
      <Footer />
    </Box>
  )
}

export default PageCanvas
