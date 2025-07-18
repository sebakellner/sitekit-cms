import React from 'react'
import {
  Card as GrommetCard,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from 'grommet'

interface CardProps {
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <GrommetCard
    background="white"
    elevation="small"
    pad="small"
    width="large"
    height={{ min: '180px' }}
  >
    <CardBody>
      <Heading level={3} margin={{ bottom: 'small', top: 'none' }}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </CardBody>
    <CardFooter pad={{ top: 'small' }}>
      <Text size="small" color="brand">
        Learn more
      </Text>
    </CardFooter>
  </GrommetCard>
)

export default Card
