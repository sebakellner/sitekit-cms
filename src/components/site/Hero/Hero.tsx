import React from 'react'
import { Box, Heading, Text, Button } from 'grommet'
import type { HeroProps } from './Hero.schema'

const Hero: React.FC<HeroProps & { onButtonClick?: () => void }> = ({
  title = 'Welcome to Site Kit Builder',
  description = 'Create and customize your website easily with our intuitive tools.',
  buttonLabel = 'Get Started',
  onButtonClick,
  background = 'white',
  headingColor = 'black',
  textColor = 'dark-2',
  buttonColor,
  buttonSize = 'large',
}) => (
  <Box
    as="section"
    align="center"
    justify="center"
    height="50vh"
    background={background}
    pad={{ vertical: 'xlarge', horizontal: 'medium' }}
    gap="medium"
  >
    <Heading level={1} color={headingColor} weight="bold" margin="none">
      {title}
    </Heading>
    <Text size="large" color={textColor} textAlign="center">
      {description}
    </Text>
    <Button
      primary
      label={buttonLabel}
      size={buttonSize}
      color={buttonColor}
      onClick={onButtonClick}
    />
  </Box>
)

export default Hero
