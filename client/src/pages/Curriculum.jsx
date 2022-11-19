import React from 'react'
import CurriculumItem from '../components/CurriculumItem'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import CurriculumContent from '../components/CurriculumContent'
import Text from '../styles/StyledText'
import { Divider } from '../styles/StyledDrawerNavigation'

const Curriculum = () => {
  return (
    <Box margin='10px 0 0 0'>
        <Text style={{ paddingLeft: '10px' }} as='h4' variant='h4' color='#121212'>Curriculum</Text>
        <Divider></Divider>
        <FlexContainer>
            <Box className='scrollbar' style={{ borderRight: '1px solid #e2e2e2' }} width={'30%'}>
                {[1, 2, 3, 4, 5, 6, 7, 7].map((value) => <CurriculumItem />)}
            </Box>
            <CurriculumContent />
        </FlexContainer>
    </Box>
  )
}

export default Curriculum