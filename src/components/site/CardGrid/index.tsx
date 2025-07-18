import React from 'react'
import { Box, Heading } from 'grommet'
import Card from '../ui/Card'

const cards = [
  {
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Card 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'Card 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
]

const CardGrid: React.FC = () => {
  return (
    <Box
      as="section"
      background="light-2"
      align="center"
      pad={{ top: 'large', bottom: 'xlarge', horizontal: 'medium' }}
    >
      <Heading
        level={3}
        weight="bold"
        size="xlarge"
        margin={{ top: 'none', bottom: 'medium' }}
      >
        Featured Cards
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
