import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '../styles/StyledBox'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { Avatar } from '../styles/StyledImage';
import Text from '../styles/StyledText';

const UserItem = ({ user }) => {

  return (
    <Box style={{ cursor: 'pointer' }}>
    <FlexContainer padding='10px' alignItems='center' justifyContent='start' gap='13px'>
        <Avatar size={40} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
        <FlexContainer width='fit-content' flexDirection='column' alignItems='start' justifyContent='start'>
            <Text as='p' color='#121212' variant='p'>Divesiboard</Text>
            <Text as='p' color='rgb(85, 85, 85)' style={{ fontStyle: 'italic' }} variant='caption'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus omnis quibusdam beatae nam ratione</Text>
            <Text as='span' variant='caption' style={{ fontStyle: 'italic' }} color='rgb(85, 85, 85)'>Frontend Developer</Text>
        </FlexContainer>
    </FlexContainer>
    <Divider></Divider>
    </Box>
  )
}

export default UserItem