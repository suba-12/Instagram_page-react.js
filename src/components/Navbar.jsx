import { AppBar,Badge,ListItemIcon,styled, Toolbar, Typography } from '@mui/material'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import React from 'react';
import '../assets/css/style.css'

const Bar = styled(Toolbar)({
  display :"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme})=>({
  display:"flex",
  backgroundColor:"white",

  padding:"0 180px",
  borderRadius:theme.shape.borderradius,
  width:"1%"
}));


export const Navbar = () => {
  return (
    <AppBar id='nav' position ="static"  backgroundColor="#E7E7E7" sx={{display:{xs:"block",sm:"none"}}}>
      <Toolbar>
      <Bar>
       <Typography  id ="col"variant="h6" p={1}  > 
       Instagram 
       </Typography>

       </Bar>
       
       
      <Search id='search'>
      <ListItemIcon>
      <AddCircleOutlineOutlinedIcon/>
      <Badge badgeContent={4} color="error">
      < MapsUgcOutlinedIcon color="action" />
      </Badge>
      </ListItemIcon>
      </Search>
  
      </Toolbar>
      </AppBar>
  )
}
