import React from 'react'
import Box from '../styles/StyledBox'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { RoundedImage } from '../styles/StyledImage';
import Text from '../styles/StyledText';

const NotificationItem = () => {
  return (
    <Box style={{ cursor: 'pointer' }}>
    <FlexContainer padding='10px' alignItems='center' justifyContent='start' gap='13px'>
        <RoundedImage size={40} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
        <FlexContainer width='fit-content' flexDirection='column' alignItems='start' justifyContent='start'>
            <Text as='p' color='#121212' variant='p'>Frontend Development Track Inboxed you</Text>
            <Text as='p' color='rgb(85, 85, 85)' style={{ fontStyle: 'italic' }} variant='caption'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus omnis quibusdam beatae nam ratione</Text>
            <Text as='span' variant='caption' style={{ fontStyle: 'italic' }} color='rgb(85, 85, 85)'>3hrs ago * Challenges</Text>
        </FlexContainer>
    </FlexContainer>
    <Divider></Divider>
    </Box>
  )
}

export default NotificationItem