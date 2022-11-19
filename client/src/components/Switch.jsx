import React from 'react'
import FlexContainer from '../styles/StyledFlexContainer'
import StyledSwitch from '../styles/StyledSwitch'
import Text from '../styles/StyledText'

const Switch = ({ label, reference, variant, ...otherProps }) => {
  return (
    <FlexContainer width='fit-content' height='fit-content' gap='9px'>
        <StyledSwitch {...otherProps} ref={reference} />
        <Text color='#121212' variant={variant || 'label'} as='label'>{label}</Text>
    </FlexContainer>
  )
}

export default Switch