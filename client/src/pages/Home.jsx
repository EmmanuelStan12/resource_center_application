import React, { useEffect, useRef, useState } from 'react'
import Box from '../styles/StyledBox';
import { useSelector } from 'react-redux';
import { Divider } from '../styles/StyledDrawerNavigation';
import FlexContainer from '../styles/StyledFlexContainer';
import Text from '../styles/StyledText';
import { Avatar, CoverImage } from '../styles/StyledImage';
import { FloatingActionButton } from '../styles/StyledButton';
import { MdEdit } from 'react-icons/md'
import { EditModal } from '../components/Modal';
import tracks from '../utils/Tracks'

const Home = () => {  
  const userState = useSelector(state => state.userReducer)
  const data = userState.data;
  const dataRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!data) {

    }
  }, [])

  const handleEdit = () => {

  }

  return (
    <Box margin='10px 0 0 0'>
      <EditModal active={isOpen} setActive={setIsOpen} contentRef={dataRef} onExecute={handleEdit} actionTitle="Edit your Username" />
      <Box height='fit-content' style={{ position: 'relative' }}>
      <CoverImage height='400px' src='https://source.unsplash.com/1600x900/?nature,photography,technology' />
        <Avatar style={{ position: 'absolute', bottom: '-45px', left: '50%', transform: 'translateX(-50%)' }} size={90} src={data.user.imageUrl} />
      </Box>
      <FlexContainer  height='fit-content' gap='7px' margin='45px 0 0 0'>
          <Text as='p' variant='p' color='#121212'>{data.user.username}</Text>
          <FloatingActionButton size={30}>
              <MdEdit />
            </FloatingActionButton>
        </FlexContainer>
      <Box height='fit-content' padding='0 1rem'>
        <Text as='h4' variant='h4' color='#121212'>Welcome, {data.user && data.user.firstname} {data.user && data.user.lastname}</Text>
      </Box>
      <Divider></Divider>
      <Box padding='0 1rem' height='fit-content'>
        <Text as='p' variant='body1' color='#121212'>Your Profile</Text>
        <FlexContainer height='fit-content' alignItems='start' flexDirection='column' padding='1rem' justifyContent='space-between'>
          <Box width='fit-content' height='fit-content'>
            <Text as='p' variant='caption' color='#121212'>Intern ID: {data.user && data.user.id}</Text>
            <Text as='p' variant='caption' color='#121212'>Track: {data.user && tracks[data.user.track]}</Text>
          </Box>
        </FlexContainer>
      </Box>
    </Box>
  )
}

export default Home