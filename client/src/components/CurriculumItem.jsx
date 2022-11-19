import React from 'react'
import Box from '../styles/StyledBox'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { Avatar } from '../styles/StyledImage';
import Text from '../styles/StyledText';

const CurriculumItem = () => {
    return (
        <Box height='fit-content' style={{ cursor: 'pointer' }}>
            <FlexContainer padding='10px' alignItems='center' justifyContent='start'>
                <Text as='p' color='#121212' variant='p'>Week 1</Text>
                <Text as='p' color='rgb(85, 85, 85)' style={{ fontStyle: 'italic' }} variant='caption'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus omnis quibusdam beatae nam ratione</Text>
            </FlexContainer>
            <Divider></Divider>
        </Box>
    )
}

export default CurriculumItem