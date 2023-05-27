import { Box, Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Profile from './Profile'
import Profilend from './Profilend'

function Profilenav() {
  return (
    <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar/>
    <Profile/>
    <Profilend/>
    </Stack></Box>
  )
}

export default Profilenav