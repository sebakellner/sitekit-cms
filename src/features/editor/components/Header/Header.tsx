import React from 'react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import { Globe, Monitor, Smartphone, StickyNote, Tablet } from 'lucide-react'
import {
  PanelWrapper,
  PanelBox,
  DropDown,
  type DropDownOption,
} from '@components/cms/ui'

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
      p={0}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <PanelBox
        borderSide="right"
        p={4}
        display="flex"
        flexDirection="row"
        width="52px"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="24px"
          height="24px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImage="url(/skbuilder-logo.svg)"
          bgSize="contain"
          bgRepeat="no-repeat"
        />
      </PanelBox>

      <PanelBox
        direction="row"
        borderSide="none"
        p={0}
        width="auto"
        gap="small"
        height="100%"
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
        <DropDown
          icon={<StickyNote size={16} />}
          options={pageOptions}
          selected={selectedPage}
          showCheckmark={false}
          onSelect={setSelectedPage}
          defaultValue="home"
        />
        <DropDown
          icon={deviceOptions.find((opt) => opt.value === selectedDevice)?.icon}
          showCheckmark={false}
          options={deviceOptions}
          selected={selectedDevice}
          onSelect={setSelectedDevice}
          defaultValue="desktop"
        />
      </PanelBox>

      <PanelBox
        borderSide="none"
        py={0}
        pl={0}
        pr={4}
        flexDirection="row"
        gap={2}
        width="auto"
      >
        <Button variant="outline" size="sm" ml={2}>
          Preview
        </Button>
        <Button colorScheme="blue" size="sm" ml={2}>
          Publish
        </Button>
      </PanelBox>
    </PanelWrapper>
  )
}

export default Header
