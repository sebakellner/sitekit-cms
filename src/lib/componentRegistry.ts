export const componentsRegistry = {
  Nav: () => import('@components/site/Nav/Nav.meta'),
  Hero: () => import('@components/site/Hero/Hero.meta'),
  CardGrid: () => import('@components/site/CardGrid/CardGrid.meta'),
  InfoText: () => import('@components/site/InfoText/InfoText.meta'),
  Footer: () => import('@components/site/Footer/Footer.meta'),
}
