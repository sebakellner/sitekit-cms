import React from 'react'
import { Box, Heading, Text, Button } from 'grommet'

interface HeroProps {
  title?: string
  description?: string
  buttonLabel?: string
  onButtonClick?: () => void
}

const Hero: React.FC<HeroProps> = ({
  title = 'Welcome to Site Kit Builder',
  description = 'Create and customize your website easily with our intuitive tools.',
  buttonLabel = 'Get Started',
  onButtonClick,
}) => (
  <Box
    as="section"
    align="center"
    justify="center"
    height="50vh"
    background={{ color: 'white' }}
    pad={{ vertical: 'xlarge', horizontal: 'medium' }}
    gap="medium"
  >
    <Heading level={1} color="black" weight="bold" margin="none">
      {title}
    </Heading>
    <Text size="large" color="dark-2" textAlign="center">
      {description}
    </Text>
    <Button primary label={buttonLabel} size="large" onClick={onButtonClick} />
  </Box>
)

export default Hero
