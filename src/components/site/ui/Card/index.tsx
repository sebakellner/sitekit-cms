import React from 'react'
import {
  Card as GrommetCard,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Box,
  Paragraph,
  Button,
  Text,
} from 'grommet'
import { LinkNext } from 'grommet-icons'

interface CardProps {
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <GrommetCard background="white" elevation="small" width="medium" pad="none">
      <CardBody height="small" pad="none">
        <Image
          fit="cover"
          src="https://d3hq6blov2iije.cloudfront.net/images/textures/HPE_data_slice_01_800_0_72_RGB+20107.jpg"
          a11yTitle="bridge"
        />
      </CardBody>
      <Box pad={{ horizontal: 'medium', top: 'small' }} responsive={false}>
        <Text size="small">Feature</Text>
        <Heading
          level={3}
          size="medium"
          margin={{ top: 'none', bottom: 'small' }}
        >
          {title}
        </Heading>
        <Paragraph margin={{ top: 'none' }}>{description}</Paragraph>
      </Box>
      <CardFooter pad={{ horizontal: 'medium', bottom: 'medium' }}>
        <Box direction="row" align="center" gap="small">
          <Button
            href="https://www.collinsdictionary.com/us/dictionary/english/bridge"
            label="Learn More"
            icon={<LinkNext />}
            reverse
            color="brand"
            size="medium"
            primary
          />
        </Box>
      </CardFooter>
    </GrommetCard>
  )
}

export default Card
