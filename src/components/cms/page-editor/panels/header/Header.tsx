import React from 'react'
import PanelBox from '@components/cms/ui/panel/PanelBox'
import { Box, Text } from 'grommet'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'
import DropDown, { type DropDownOption } from '@components/cms/ui/DropDown'
import { Desktop, Globe, PhoneHorizontal, PhoneVertical } from 'grommet-icons'
import { Document } from 'grommet-icons'

const languageOptions: DropDownOption[] = [
  { label: 'English (United States)', value: 'en-US' },
  { label: 'Spanish (Argentina)', value: 'es-AR' },
]

const deviceOptions: DropDownOption[] = [
  { label: 'Desktop', value: 'desktop', icon: <Desktop size="xsmall" /> },
  { label: 'Tablet', value: 'tablet', icon: <Desktop size="xsmall" /> },
  {
    label: 'Mobile (L)',
    value: 'mobile-l',
    icon: <PhoneVertical size="xsmall" />,
  },
  { label: 'Mobile', value: 'mobile', icon: <PhoneHorizontal size="xsmall" /> },
]

const pageOptions: DropDownOption[] = [
  { label: 'Home', value: 'home', icon: <Document size="xsmall" /> },
  { label: 'About', value: 'about', icon: <Document size="xsmall" /> },
  { label: 'Contact', value: 'contact', icon: <Document size="xsmall" /> },
  { label: 'Blog', value: 'blog', icon: <Document size="xsmall" /> },
  { label: 'Pricing', value: 'pricing', icon: <Document size="xsmall" /> },
]

const Header = () => {
  const [selectedLang, setSelectedLang] = React.useState('en-US')
  const [selectedDevice, setSelectedDevice] = React.useState('desktop')
  const [selectedPage, setSelectedPage] = React.useState('home')

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
        />
      </PanelBox>

      <Box direction="row">
        <PanelBox
          borderSide="horizontal"
          pad={{ horizontal: 'medium', vertical: 'small' }}
          direction="row"
          width="auto"
          gap="none"
          height="100%"
          flex={false}
        >
          <DropDown
            icon={<Globe size="small" />}
            options={languageOptions}
            selected={selectedLang}
            defaultValue="en-US"
            onSelect={(val) => {
              if (val !== 'settings') setSelectedLang(val)
            }}
          />
        </PanelBox>
        <PanelBox
          borderSide="right"
          pad={{ horizontal: 'medium', vertical: 'small' }}
          direction="row"
          width="auto"
          gap="none"
          height="100%"
          flex={false}
        >
          <DropDown
            icon={<Document size="xsmall" />}
            options={pageOptions}
            selected={selectedPage}
            onSelect={setSelectedPage}
            defaultValue="home"
          />
        </PanelBox>
        <PanelBox
          borderSide="right"
          pad={{ horizontal: 'medium', vertical: 'small' }}
          direction="row"
          width="auto"
          gap="none"
          height="100%"
          flex={false}
        >
          <DropDown
            icon={
              deviceOptions.find((opt) => opt.value === selectedDevice)?.icon
            }
            options={deviceOptions}
            selected={selectedDevice}
            onSelect={setSelectedDevice}
            defaultValue="desktop"
          />
        </PanelBox>
      </Box>

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
