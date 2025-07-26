import React from 'react'
import { Box, Heading } from 'grommet'
import type { CardGridProps } from './CardGrid.schema'
import { Card } from '../ui/Card'

const CardGrid: React.FC<CardGridProps> = ({
  title = 'Featured Cards',
  background = 'light-2',
  items = [],
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
        {items.map((item, idx) => (
          <Card key={idx} title={item.title} description={item.description} />
        ))}
      </Box>
    </Box>
  )
}

export default CardGrid
