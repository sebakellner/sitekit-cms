import React from 'react'
import { Box, Button, Text } from 'grommet'

import PanelBox from '@components/cms/ui/panel/PanelBox'
import DropDown, { type DropDownOption } from '@components/cms/ui/DropDown'
import PanelWrapper from '@components/cms/ui/panel/PanelWrapper'
import {
  Globe,
  Monitor,
  Save,
  Smartphone,
  StickyNote,
  Tablet,
} from 'lucide-react'

const languageOptions: DropDownOption[] = [
  { label: 'English (United States)', value: 'en-US' },
  { label: 'Spanish (Argentina)', value: 'es-AR' },
]

const deviceOptions: DropDownOption[] = [
  {
    label: 'Desktop (1440px)',
    value: 'desktop',
    icon: <Monitor size={16} />,
  },
  { label: 'Tablet (768px)', value: 'tablet', icon: <Tablet size={16} /> },
  {
    label: 'Mobile (480px)',
    value: 'mobile',
    icon: <Smartphone size={16} />,
  },
]

const pageOptions: DropDownOption[] = [
  { label: 'Home', value: 'home', icon: <StickyNote size={16} /> },
  { label: 'About', value: 'about', icon: <StickyNote size={16} /> },
  { label: 'Contact', value: 'contact', icon: <StickyNote size={16} /> },
  { label: 'Blog', value: 'blog', icon: <StickyNote size={16} /> },
  { label: 'Pricing', value: 'pricing', icon: <StickyNote size={16} /> },
]

const Header = () => {
  const [selectedLang, setSelectedLang] = React.useState('en-US')
  const [selectedDevice, setSelectedDevice] = React.useState('desktop')
  const [selectedPage, setSelectedPage] = React.useState('home')

  return (
    <PanelWrapper
      borderSide="bottom"
      pad="none"
      fill={false}
      direction="row"
      height="52px"
      justify="between"
    >
      <PanelBox
        borderSide="right"
        pad="small"
        direction="row"
        width="52px"
        height="100%"
        justify="center"
        align="center"
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

      <Box direction="row" height="100%">
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
            icon={<Globe size={16} />}
            options={languageOptions}
            selected={selectedLang}
            defaultValue="en-US"
            onSelect={(val) => {
              if (languageOptions.some((option) => option.value === val)) {
                setSelectedLang(val)
              }
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
            icon={<StickyNote size={16} />}
            options={pageOptions}
            selected={selectedPage}
            showCheckmark={false}
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
            showCheckmark={false}
            options={deviceOptions}
            selected={selectedDevice}
            onSelect={setSelectedDevice}
            defaultValue="desktop"
          />
        </PanelBox>
      </Box>

      <PanelBox
        borderSide={false}
        pad="small"
        direction="row"
        width="auto"
        flex={false}
      >
        <Box direction="row" align="center" gap="xsmall">
          <Save size={16} color="green" />
          <Text size="xsmall" color="dark-4">
            Changes saved
          </Text>
        </Box>
        <Button
          label="Preview"
          size="small"
          secondary
          margin={{ left: 'small' }}
        />
        <Button size="small" label="Publish" primary />
      </PanelBox>
    </PanelWrapper>
  )
}

export default Header
