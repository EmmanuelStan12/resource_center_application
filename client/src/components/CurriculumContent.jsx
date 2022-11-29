import React from 'react'
import Box from '../styles/StyledBox'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import Text from '../styles/StyledText'
import Switch from './Switch'

const CurriculumContent = ({ item }) => {
  return (
    <Box padding='10px' width='70%' className='scrollbar'>
      <Text as='h5' style={{ fontWeight: 'bold' }} color='#121212' variant='h5'>{item.title}</Text>
      <Divider></Divider>
      <Text style={{ margin: '10px 0 0 0' }} as='h6' color='#121212' variant='body1'>Learning Objectives</Text>
      <Box height='fit-content'>
        {item.objectives.map((value) => <Text as='p' color='#121212' style={{ listStyle: 'inside', fontSize: '0.9rem' }}> - {value}.</Text>)}
      </Box>
      <Box height='fit-content'>
        <Text style={{ margin: '10px 0 0 0' }} as='h6' color='#121212' variant='body1'>Description</Text>
        <Text as='p' color='#121212' variant='caption'>{item.description}.</Text>
      </Box>
      <Box height='fit-content'>
        <Text style={{ margin: '10px 0 0 0' }} as='h6' color='#121212' variant='body1'>Resources</Text>
        {item.resources.map((value) => <Text as='p' color='#121212' style={{ listStyle: 'inside', fontSize: '0.9rem' }}> - <a href={value}>{value}.</a></Text>)}
      </Box>
      <FlexContainer margin='10px 0 0 0' justifyContent='space-between' height='fit-content'>
        <Text as='p' color='#121212' variant='caption'></Text>
        <Switch label='Completed' reference={null} variant='caption' />
      </FlexContainer>
    </Box>
  )
}

export default CurriculumContent