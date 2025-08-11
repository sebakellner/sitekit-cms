import React from 'react'
import { Box, Heading, Text, Button } from 'grommet'
import type { HeroProps } from './Hero.schema'

const Hero: React.FC<HeroProps & { onButtonClick?: () => void }> = ({
  title = 'Welcome to Site Kit Builder',
  description = 'Create and customize your website easily with our intuitive tools.',
  buttonLabel = 'Get Started',
  onButtonClick,
  background = '#ffffff',
  headingColor = '#000000',
  textColor = '#333333',
  buttonColor,
  buttonSize = 'medium',
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
    <Heading
      level={1}
      size="small"
      color={headingColor}
      weight="bold"
      margin="none"
    >
      {title}
    </Heading>
    <Text size="medium" color={textColor} textAlign="center">
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
