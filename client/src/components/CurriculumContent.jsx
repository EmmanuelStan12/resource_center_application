import React from 'react'
import Box from '../styles/StyledBox'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import Text from '../styles/StyledText'
import Switch from './Switch'

const CurriculumContent = () => {
  return (
    <Box padding='10px' width='70%' className='scrollbar'>
      <Text as='h5' style={{ fontWeight: 'bold' }} color='#121212' variant='h5'>Redux for State Management</Text>
      <Divider></Divider>
      <Text style={{ margin: '10px 0 0 0' }} as='h6' color='#121212' variant='body1'>Learning Objectives</Text>
      <Box height='fit-content'>
        {[1, 3, 4, 5, 6, 7, 8].map((value) => <Text as='p' color='#121212' style={{ listStyle: 'inside', fontSize: '0.9rem' }}> - Lorem ipsum dolor sit amet.</Text>)}
      </Box>
      <Box height='fit-content'>
        <Text style={{ margin: '10px 0 0 0' }} as='h6' color='#121212' variant='body1'>Description</Text>
        <Text as='p' color='#121212' variant='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos aperiam sed provident inventore pariatur dignissimos hic rerum ab tempore cupiditate qui quo dolore tenetur sequi nostrum repellendus, mollitia enim libero officia molestias eum. Fuga quis, ratione nulla est eveniet praesentium dignissimos cumque eius odit, quae consequatur delectus deserunt optio debitis.</Text>
      </Box>
      <Box height='fit-content'>
        <Text style={{ margin: '10px 0 0 0' }} as='h6' color='#121212' variant='body1'>Resources</Text>
        {[1, 3, 4, 5, 6, 7, 8].map((value) => <Text as='p' color='#121212' style={{ listStyle: 'inside', fontSize: '0.9rem' }}> - Lorem ipsum dolor sit amet.</Text>)}
      </Box>
      <FlexContainer margin='10px 0 0 0' justifyContent='space-between' height='fit-content'>
        <Text as='p' color='#121212' variant='caption'>Due date: 12/12/12</Text>
        <Switch label='Completed' reference={null} variant='caption' />
      </FlexContainer>
    </Box>
  )
}

export default CurriculumContent