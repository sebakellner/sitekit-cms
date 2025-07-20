import Hero, { type HeroProps } from '@components/site/Hero'
import CardGrid, { type CardGridProps } from '@components/site/CardGrid'
import InfoText, { type InfoTextProps } from '@components/site/InfoText'
import Nav, { type NavProps } from '@components/site/Nav'
import Footer, { type FooterProps } from '@components/site/Footer'

type SectionMap = {
  Nav: { component: React.ComponentType<NavProps>; name: string }
  Hero: { component: React.ComponentType<HeroProps>; name: string }
  CardGrid: { component: React.ComponentType<CardGridProps>; name: string }
  InfoText: { component: React.ComponentType<InfoTextProps>; name: string }
  Footer: { component: React.ComponentType<FooterProps>; name: string }
}

export const sectionMap: SectionMap = {
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
