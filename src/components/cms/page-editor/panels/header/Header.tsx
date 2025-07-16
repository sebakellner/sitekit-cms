import PanelBox from '@components/cms/ui/panel/PanelBox'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'
import { Box, Text } from 'grommet'

const Header = () => {
  return (
    <PanelWrapper
      borderSide="bottom"
      pad="none"
      direction="row"
      justify="between"
    >
      <PanelBox
        borderSide="right"
        pad="small"
        direction="row"
        width="52px"
        height="100%"
        justify="center"
        flex={false}
      >
        <Box
          width="24px"
          height="24px"
          align="center"
          justify="center"
          background={{ image: 'url(/skbuilder-logo.svg)', size: 'contain' }}
        ></Box>
      </PanelBox>

      <PanelBox
        borderSide="right"
        pad="small"
        direction="row"
        width="auto"
        flex={false}
      >
        <Text size="large" weight="bold">
          Page Editor
        </Text>
      </PanelBox>

      <PanelBox
        borderSide="right"
        pad="small"
        direction="row"
        width="auto"
        flex={false}
      >
        <Text size="large" weight="bold">
          Page Editor
        </Text>
      </PanelBox>
    </PanelWrapper>
  )
}

export default Header
