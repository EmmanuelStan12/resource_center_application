import React, { useEffect, useRef, useState } from 'react'
import Box from '../styles/StyledBox'
import Text from '../styles/StyledText'
import SectionHeader from '../styles/StyledSection'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { StyledTab } from '../styles/StyledTab'
import { FloatingActionButton } from '../styles/StyledButton'
import { MdAdd } from 'react-icons/md'
import Modal from '../components/Modal'
import TextField, { TextArea } from '../components/TextField'
import InboxItem from '../components/InboxItem'
import { useDispatch, useSelector } from 'react-redux'
import { getInbox, sendInbox } from '../logic/actions/InboxActions'
import { InboxModal } from '../components/Modal'
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingPage from '../components/LoadingPage'

const types = {
  'read': {
    actionType: (text) => text,
    title: (text) => <Text variant='body1' color='#121212' as='h6'>{text}</Text>,
    description: (text) => <Text variant='p' color='#121212' as='p'>{text}</Text>
  },
  'write': {
    actionType: (text) => text,
    title: (ref) => <TextField
      variant={'outlined'}
      reference={ref}
      type='text'
    />,
    description: (ref) => <TextArea
      variant={'outlined'}
      reference={ref}
      type='text'
    />
  }
}
const tabs = [
  {
    title: 'Sent',
    route: 'sender'
  },
  {
    title: 'Received',
    route: 'receiver'
  }
]
const Inbox = () => {
  const [openModal, setOpenModal] = useState(false)
  const inboxState = useSelector(state => state.inboxReducer)
  const dispatch = useDispatch()
  const userState = useSelector(state => state.userReducer)
  const [currentTab, setCurrentTab] = useState(0)
  console.log(inboxState)
  const [show, setShow] = useState(false)


  useEffect(() => {
    if (userState.data && userState.data.token) {
      dispatch(getInbox(userState.data.token.token, tabs[currentTab].route))
    }
  }, [currentTab])

  const titleRef = useRef()
  const descriptionRef = useRef()
  const usernameRef = useRef()

  const handleExecute = () => {
    const title = titleRef.current.value;
    const desc = descriptionRef.current.value;
    const id = usernameRef.current.value;
    const data = {
      sender: userState.data.user,
      receiver: id,
      title,
      description: desc,
      timestamp: new Date().toISOString()
    }
    dispatch(sendInbox(data, userState.data.token.token));
    titleRef.current.value = ''
    usernameRef.current.value = ''
    descriptionRef.current.value = ''
    setOpenModal(false)
  }
  return (
    <Box height='fit-content' margin='10px 0 0 0' padding='20px'>
      <ErrorDisplay show={show} setShow={setShow} error={inboxState.error} />
      {inboxState.loading && <LoadingPage />}
      <InboxModal
        active={openModal}
        setActive={setOpenModal}
        onExecute={handleExecute}
        titleRef={titleRef}
        descriptionRef={descriptionRef}
        actionTitle="Send Message"
        usernameRef={usernameRef}
      />
      <FlexContainer justifyContent='space-between' gap='9px'>
        <Text as='h4' variant='h4' color='#121212'>Inbox</Text>
        <FloatingActionButton onClick={() => setOpenModal(true)}>
          <MdAdd />
        </FloatingActionButton>
      </FlexContainer>
      <Divider></Divider>
      <FlexContainer justifyContent='start' gap='9px'>
        {
          tabs.map((tab, index) => (
            <StyledTab
              onClick={() => setCurrentTab(index)}
              className={tabs[currentTab].route === tab.route && 'active'}>{tab.title}</StyledTab>
          )
          )
        }
      </FlexContainer>
      <Box className='scrollbar'>
        {inboxState.data && inboxState.data.map((value) => {
          const tab = currentTab === 1 ? 0 : 1
          return (
            <InboxItem type={tabs[tab].route} inbox={value} />
          );
        })}
      </Box>
    </Box>
  )
}

export default Inbox