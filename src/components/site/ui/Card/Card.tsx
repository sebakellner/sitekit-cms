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
import type { CardProps } from './Card.schema'

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc = 'https://d3hq6blov2iije.cloudfront.net/images/textures/HPE_data_slice_01_800_0_72_RGB+20107.jpg',
  imageAlt = 'bridge',
  label = 'Feature',
  buttonLabel = 'Learn More',
  buttonHref = 'https://www.collinsdictionary.com/us/dictionary/english/bridge',
}) => {
  return (
    <GrommetCard background="white" elevation="small" width="medium" pad="none">
      <CardBody height="small" pad="none">
        <Image fit="cover" src={imageSrc} a11yTitle={imageAlt} />
      </CardBody>
      <Box pad={{ horizontal: 'medium', top: 'small' }} responsive={false}>
        <Text size="small">{label}</Text>
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
            href={buttonHref}
            label={buttonLabel}
            icon={<LinkNext size="small" color="white" />}
            reverse
            color="brand"
            size="medium"
          />
        </Box>
      </CardFooter>
    </GrommetCard>
  )
}

export default Card
