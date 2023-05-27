
import { Box, Stack } from '@mui/system'
import React from 'react'
import "../assets/css/style.css"
import { Fead } from '../components/Fead'
import { Rightbar } from '../components/Rightbar'


import { Sidebar } from '../components/Sidebar'
import Search from './Search'

function Sear() {
  return (
    <Box >
      
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Search/>
      <Fead />
      <Rightbar/>
    </Stack>
    <div >   </div>
    </Box>
  )
}

export default Sear
