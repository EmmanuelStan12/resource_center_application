import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Box from '../styles/StyledBox'

const AuthContainer = () => {
  return (
    <Box padding='2.3rem 0 0 0'>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default AuthContainer