import React from 'react'
import { Box, Heading, Text, Button } from 'grommet'

export interface HeroProps {
  title?: string
  description?: string
  buttonLabel?: string
  onButtonClick?: () => void
  background?: string | { color: string }
  headingColor?: string
  textColor?: string
  buttonColor?: string
  buttonSize?: 'small' | 'medium' | 'large'
}

const Hero: React.FC<HeroProps> = ({
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
