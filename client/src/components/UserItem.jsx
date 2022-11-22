import React, { useEffect } from 'react'
import { MdMail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Box from '../styles/StyledBox'
import { FloatingActionButton } from '../styles/StyledButton';
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { Avatar } from '../styles/StyledImage';
import Text from '../styles/StyledText';
import Tracks from '../utils/Tracks';

const UserItem = ({ user, onClick }) => {

  return (
    <Box style={{ cursor: 'pointer' }}>
    <FlexContainer flexDirection='row' padding='10px' alignItems='center' justifyContent='start' gap='13px'>
        <Avatar size={40} src={user.imageUrl} />
        <FlexContainer style={{ flex: 1 }} width='fit-content' flexDirection='column' alignItems='start' justifyContent='start'>
            <Text as='p' color='#121212' variant='p'>{user.firstname} {user.lastname}</Text>
            <Text as='p' color='rgb(85, 85, 85)' style={{ fontStyle: 'italic' }} variant='caption'>email: {user.email}, username: {user.username}, internID: {user.id}</Text>
            <Text as='span' variant='caption' style={{ fontStyle: 'italic' }} color='rgb(85, 85, 85)'>{Tracks[`${user.track}`]}</Text>
        </FlexContainer>
        <Box width='fit-content'>
          <FloatingActionButton onClick={onClick}>
            <MdMail />
          </FloatingActionButton>
        </Box>
    </FlexContainer>
    <Divider></Divider>
    </Box>
  )
}

export default UserItem