import Hero from '@components/site/Hero'
import CardGrid from '@components/site/CardGrid'
import InfoText from '@components/site/InfoText'
import Nav from '@components/site/Nav'
import Footer from '@components/site/Footer'

export const sectionMap = {
  Nav: {
    name: 'Nav',
    component: Nav,
  },
  Hero: {
    name: 'Hero',
    component: Hero,
  },
  CardGrid: {
    name: 'CardGrid',
    component: CardGrid,
  },
  InfoText: {
    name: 'InfoText',
    component: InfoText,
  },
  Footer: {
    name: 'Footer',
    component: Footer,
  },
}
