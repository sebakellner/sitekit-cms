import { Box, Text } from 'grommet'
import type React from 'react'

type TipContentProps = {
  children: React.ReactNode
}

const TipContent = ({ children }: TipContentProps) => {
  return (
    <Box direction="row" align="center" justify="start">
      <svg viewBox="0 0 22 22" version="1.1" width="22px" height="22px">
        <polygon
          fill="#333333"
          stroke="#555555"
          points="6 2 18 12 6 22"
          transform="matrix(-1 0 0 1 30 0)"
        />
      </svg>
      <Box
        background="#333333"
        border={{ color: 'dark-2', size: 'xsmall' }}
        direction="row"
        pad="small"
        round="xsmall"
      >
        <Text size="xsmall">{children}</Text>
      </Box>
    </Box>
  )
}

export default TipContent
