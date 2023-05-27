import { Box, Stack } from '@mui/material'
import React from 'react'
import { Fead } from '../components/Fead'
import { Navbar } from '../components/Navbar'
import { Rightbar } from '../components/Rightbar'
import { Sidebar } from '../components/Sidebar'
import "../assets/css/style.css"


function Home() {
  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Fead />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default Home