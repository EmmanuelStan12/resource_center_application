import React from 'react'
import Box from '../styles/StyledBox'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { Avatar } from '../styles/StyledImage';
import Text from '../styles/StyledText';

const CurriculumItem = ({ item, active, setActive }) => {
    return (
        <Box onClick={() => {
            if (!active) {
                setActive(item.week)
            }
        }} height='fit-content' style={{ cursor: 'pointer' }}>
            <FlexContainer background={active ? 'primary': 'white'} padding='10px' flexDirection='column' alignItems='start' justifyContent='center'>
                <Text as='p' color={active ? 'white' :'#121212'} variant='p'>Week {item.week}</Text>
                <Text as='p' color={active ? 'rgb(241, 241, 241)': 'rgb(85, 85, 85)'} style={{ fontStyle: 'italic' }} variant='caption'>{item.title}</Text>
            </FlexContainer>
            <Divider></Divider>
        </Box>
    )
}

export default CurriculumItem