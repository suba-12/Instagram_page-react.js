import { Box, Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Create from './Create'
import Profilend from './Profilend'


function Create_nav() {
  return (
    <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar/>
    <Create/>
    <Profilend/>
    </Stack></Box>
  )
}

export default Create_nav