import React, { useEffect } from 'react'
import FlexContainer from '../styles/StyledFlexContainer'
import NotificationItem from './NotificationItem'
import Box from '../styles/StyledBox'

const NotificationContent = ({ currentTab }) => {
  useEffect(() => {
    
  }, [currentTab])
  
  return (
    <Box>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => <NotificationItem />)}
    </Box>
  )
}

export default NotificationContent