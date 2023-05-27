
import { Box } from '@mui/system'
import React from 'react'
import "../assets/css/style.css"
import creat from '../assets/create_2.png'


const Create = () => {
  return (

    <Box flex={4} p={2} bgcolor="white">

      <div class="inner_div">
        <div className="modelContaniner">
          <div className="title">
            Create
            <hr />
          </div>

        </div>
        <div className='outer'>
          <img src={creat} alt="Avatar" />
          

        </div>
      </div>
</Box>

  )
}

export default Create