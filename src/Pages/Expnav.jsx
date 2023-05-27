import React from 'react'

 import Expl from './Expl'
import { Box, Stack } from '@mui/system'
import { Sidebar } from '../components/Sidebar'

function Expnav() {
  return (
    <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar/>
      <Expl />
    </Stack>
  </Box>
  )
}

export default Expnav