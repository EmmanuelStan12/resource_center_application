import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
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
import Modal from '../components/Modal'
import LoadingPage from '../components/LoadingPage'
import { sendInbox } from '../logic/actions/InboxActions'
import tracks from '../utils/Tracks'
import { useNavigate } from 'react-router-dom'

const Users = () => {

  const dispatch = useDispatch()
  const usersState = useSelector(state => state.usersReducer)
  const userState = useSelector(state => state.userReducer)
  const inboxState = useSelector(state => state.inboxReducer)
  const navigate = useNavigate()
  const tabs = [
    {
      title: 'Interns',
      route: 'interns'
    },
    {
      title: `${tracks[userState.data.user.track]}`,
      route: userState.data.user.track
    },
    {
      title: 'Mentors',
      route: 'mentors'
    }
  ]
  const [show, setShow] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useLayoutEffect(() => {
    if (!userState.data) {
      navigate('/login', {replace: true})
    }
  }, [])
  useEffect(() => {
    
    if (userState.data && userState.data.token) {
      dispatch(getUsers('all', userState.data.token.token))
    }
  }, []);
  const [openModal, setOpenModal] = useState(false)
    
  const [currentTab, setCurrentTab] = useState(tabs[2].route)
  const titleRef = useRef()
  const descriptionRef = useRef()

  

  const handleUserClick = (user) => {
    setOpenModal(true)
    setCurrentUser(user)
  }

  const handleExecute = () => {
    const title = titleRef.current.value;
    const desc = descriptionRef.current.value;
    const data = {
      sender: userState.data.user,
      receiver: currentUser.id,
      title,
      description: desc,
      timestamp: new Date().toISOString()
    }
    dispatch(sendInbox(data, userState.data.token.token));
    titleRef.current.value = ''
    descriptionRef.current.value = ''
    setOpenModal(false)
    setCurrentUser(null);
  }

  return (
    <Box height='fit-content' padding='10px' margin='10px 0 0 0'>
      <ErrorDisplay show={show} setShow={setShow} error={usersState.error} />
      {(inboxState.loading || usersState.loading)&& <LoadingPage />}
      <Modal 
      active={openModal} 
      setActive={setOpenModal} 
      onExecute={handleExecute}
      titleRef={titleRef}
      descriptionRef={descriptionRef}
      actionTitle="Send Message"
       />
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
        {usersState.data && usersState.data
        .filter((user) => {
          if (currentTab === 'interns') return true;
          if (user && currentTab === userState.data.user.track) return user.track === userState.data.user.track;
          if (user && currentTab === 'mentors') return user.isMentor;
        })
        .map((user) => {
          return (user && <UserItem key={user.id} onClick={() => handleUserClick(user)} user={user} />)
        })}
      </Box>
    </Box>
  )
}

export default Users