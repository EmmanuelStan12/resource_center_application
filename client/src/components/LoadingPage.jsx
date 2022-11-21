import React from 'react'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import StyledProgressBar from '../styles/StyledProgressBar'

const LoadingPage = () => {
  return (
    <FlexContainer style={{ zIndex: 999, position: 'fixed', top: 0, left: 0, background: 'rgba(0, 0, 0, 0.2)' }}>
        <StyledProgressBar variant='primary' />
    </FlexContainer>
  )
}

export default LoadingPage