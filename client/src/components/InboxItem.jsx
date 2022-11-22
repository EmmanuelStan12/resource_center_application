import React from 'react'
import Box from '../styles/StyledBox'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { Avatar } from '../styles/StyledImage';
import Text from '../styles/StyledText';

const InboxItem = ({ inbox, type }) => {
  return (
    <Box style={{ cursor: 'pointer' }}>
    <FlexContainer padding='10px' alignItems='center' justifyContent='start' gap='13px'>
        <Avatar size={40} src={inbox[type].imageUrl} />
        <FlexContainer width='fit-content' flexDirection='column' alignItems='start' justifyContent='start'>
            <Text as='p' color='#121212' variant='p'>{inbox.title}</Text>
            <Text as='p' color='rgb(85, 85, 85)' style={{ fontStyle: 'italic' }} variant='caption'>{inbox.description}</Text>
            <Text as='p' color='rgb(85, 85, 85)' style={{ fontStyle: 'italic' }} variant='caption'>{type === 'receiver' ? 'To': 'From'}: {inbox[type].firstname} {inbox[type].lastname}, Username: {inbox[type].username}</Text>
            <Text as='span' variant='caption' style={{ fontStyle: 'italic' }} color='rgb(85, 85, 85)'>Date: {new Date(inbox.timestamp).toLocaleDateString()}</Text>
        </FlexContainer>
    </FlexContainer>
    <Divider></Divider>
    </Box>
  )
}

export default InboxItem