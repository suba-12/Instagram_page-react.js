import { Button, Drawer, List,ListItemButton,ListItemText } from '@mui/material'
import React,{useState} from 'react'

const Menu = () => {
  const {open, setOpen} =useState(false)
  const courses = ['Reactjs','nodejs','mongo']
    return (
    <div>
      <Button variant='container' onClick={()=> setOpen(true)}>open</Button>
      <Drawer open={open} onClose={()=> setOpen(false)}>
        <List>
           {
            courses.map(courses =>(
              <ListItemButton  onClick={() => setOpen(false)}>
                 <ListItemText primary={courses}/>
              </ListItemButton>
              
            ))
           }
        </List>

      </Drawer>
    </div>
  )
}

export default Menu