import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Notification from './Notification'

function Notnav() {
  return (
    <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar/>
    <Notification/>
    </Stack>
    </Box>
  )
}

export default Notnav