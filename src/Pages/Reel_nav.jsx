import { Box, Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Reel from './reel'



function Reel_nav() {
  return (
    <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar/>
    <Reel/>
    
    </Stack></Box>
  )
}

export default Reel_nav