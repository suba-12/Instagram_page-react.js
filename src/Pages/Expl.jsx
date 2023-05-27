import { Box } from '@mui/system'
import React from 'react'
import {  CardMedia } from '@mui/material'
import expl1 from '../assets/expl1.jpg'
import expl2 from '../assets/expl2.jpg'
import expl3 from '../assets/expl3.jpg'
import gal4 from '../assets/gal4.jpg'

import "../assets/css/style.css"


function Expl() {
  return (
    < Box bgcolor="white" flex={6} p={2}>
       <div className='app_exp' id='expl'>

       <CardMedia
        component="img"
        height="100%"
        image={gal4}
        alt="Nature_god"
      />
        <CardMedia
        component="img"
        height="100%"
        image={expl1}
        alt="Nature_god"
      />

<CardMedia
        component="img"
        height="100%"
        image={expl2}
        alt="Nature_god"
      />
<CardMedia
        component="img"
        height="100%"
        image={expl3}
        alt="Nature_god"
      />



    </div>
      </Box>
  )
}

export default Expl