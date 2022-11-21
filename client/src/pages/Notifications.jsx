import React, { useEffect, useState } from 'react'
import Box from '../styles/StyledBox'
import Text from '../styles/StyledText'
import SectionHeader from '../styles/StyledSection'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { StyledTab } from '../styles/StyledTab'
import NotificationContent from '../components/NotificationContent';
import { useSelector, useDispatch } from 'react-redux'
import { getNotifications } from '../logic/actions/NotificationActions'
import ErrorDisplay from '../components/ErrorDisplay'
import useLocalStorage from '../hooks/useLocalStorage'

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
  const state = useSelector(state => state.notificationReducer);
  const [show, setShow] = useState(false);
  const { clear } = useLocalStorage()
  console.log(state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications())
  }, []);

  useEffect(() => {
    if (state.error && state.error.status === 422) {
      setShow(true)
    }
  }, [state])
  

  return (
    <Box height='fit-content' margin='10px 0 0 0' padding='20px'>
      <ErrorDisplay show={show} setShow={setShow} error={state.error} />
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