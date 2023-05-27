import { Box, Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Message from './Message'
import Profilend from './Profilend'

function Messagenav() {
  return (
    <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar/>
    <Message/>
    <Profilend/>
    </Stack></Box>
  )
}

export default Messagenav