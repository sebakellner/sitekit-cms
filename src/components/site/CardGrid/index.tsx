import React from 'react'
import { Box, Heading } from 'grommet'
import Card from '../ui/Card'

export interface CardGridItem {
  title: string
  description: string
}

export interface CardGridProps {
  title?: string
  background?: string
  cards?: CardGridItem[]
}

const defaultCards: CardGridItem[] = [
  {
    title: 'Card title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Card title 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'Card title 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
]

const CardGrid: React.FC<CardGridProps> = ({
  title = 'Featured Cards',
  background = 'light-2',
  cards = defaultCards,
}) => {
  return (
    <Box
      as="section"
      background={background}
      align="center"
      pad={{ top: 'large', bottom: 'xlarge', horizontal: 'large' }}
    >
      <Heading
        level={3}
        weight="bold"
        size="xlarge"
        margin={{ top: 'none', bottom: 'medium' }}
      >
        {title}
      </Heading>
      <Box
        direction="row-responsive"
        gap="medium"
        fill="horizontal"
        align="center"
        justify="center"
      >
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} description={card.description} />
        ))}
      </Box>
    </Box>
  )
}

export default CardGrid
