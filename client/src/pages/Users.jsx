import React, { useState, useEffect } from 'react'
import Box from '../styles/StyledBox'
import Text from '../styles/StyledText'
import SectionHeader from '../styles/StyledSection'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { StyledTab } from '../styles/StyledTab'
import UserItem from '../components/UserItem'
import { useDispatch, useSelector } from 'react-redux'
import ErrorDisplay from '../components/ErrorDisplay'
import { getUsers } from '../logic/actions/UsersActions'

const tabs = [
  {
    title: 'Interns',
    route: 'interns'
  },
  {
    title: 'Frontend Developers',
    route: 'frontend'
  },
  {
    title: 'Mentors',
    route: 'mentors'
  }
]

const Users = () => {

  const dispatch = useDispatch()
  const usersState = useSelector(state => state.usersReducer)
  const [show, setShow] = useState(false)
  console.log(usersState)
  useEffect(() => {
    dispatch(getUsers('all'))
  }, [])
    
  const [currentTab, setCurrentTab] = useState(tabs[2].route)
  return (
    <Box height='fit-content' padding='10px' margin='10px 0 0 0'>
      <ErrorDisplay show={show} setShow={setShow} error={usersState.error} />
      <Text as='h4' variant='h4' color='#121212'>Users</Text>
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
      <Box>
        <UserItem />
      </Box>
    </Box>
  )
}

export default Users