import React from 'react'
import FlexContainer from '../styles/StyledFlexContainer'
import StyledSwitch from '../styles/StyledSwitch'
import Text from '../styles/StyledText'

const Switch = ({ label }) => {
  return (
    <FlexContainer width='fit-content' height='fit-content' gap='9px'>
        <StyledSwitch />
        <Text color='121212' variant='label' as='label'>{label}</Text>
    </FlexContainer>
  )
}

export default Switch