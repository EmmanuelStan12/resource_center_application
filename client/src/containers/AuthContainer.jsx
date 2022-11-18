import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Box from '../styles/StyledBox'

const AuthContainer = () => {
  return (
    <Box padding='70px 0px 0px'>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default AuthContainer