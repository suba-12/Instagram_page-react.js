import { Box } from '@mui/system'
import React from 'react'
import "../assets/css/style.css"
import reel from '../assets/reel1.jpg'
import re from '../assets/reel3.jpg'


const Reel = () => {
    

  return (
    <Box flex={4} p={2} bgcolor="white">
     <div className='reels'>
          <img src={reel} alt="Avatar" />
        </div> 
        
        

    </Box>
  )
}

export default Reel
