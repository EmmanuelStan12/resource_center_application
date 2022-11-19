import React, { useState } from 'react'
import Box from '../styles/StyledBox'
import Text from '../styles/StyledText'
import SectionHeader from '../styles/StyledSection'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { StyledTab } from '../styles/StyledTab'
import NotificationContent from '../components/NotificationContent'

const tabs = [
  {
    title: 'For me',
    route: 'for_me'
  },
  {
    title: 'Track',
    route: 'track'
  },
  {
    title: 'All',
    route: 'all'
  }
]

const Notifications = () => {

  const [currentTab, setCurrentTab] = useState(tabs[2].route)

  return (
    <Box height='fit-content' margin='10px 0 0 0' padding='20px'>
      <Text as='h4' variant='h4' color='#121212'>Notifications</Text>
      <Divider></Divider>
      <FlexContainer justifyContent='start' gap='9px'>
        {
          tabs.map((tab) => (
            <StyledTab 
            onClick={() => setCurrentTab(tab.route)} 
            className={currentTab === tab.route && 'active'}>{tab.title}</StyledTab>
          )
          )
        }
      </FlexContainer>
      <Divider></Divider>
      <NotificationContent currentTab={currentTab} />
    </Box>
  )
}

export default Notifications