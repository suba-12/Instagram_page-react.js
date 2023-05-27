import { Box } from '@mui/system'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import MenuIcon from '@mui/icons-material/Menu';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';


import React from 'react'

import { Badge, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';



export const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
    
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}

    >
      <Box position="fixed" id = 'side' >
        <Typography id='col' variant="h6" p={1} >
          Instagram
        </Typography>

        <List>
          <ListItem disablePadding>

            <ListItemButton component="a" to="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <Link id='links' to="/search">
              <ListItemButton component="a" >
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton></Link>
          </ListItem>


          <ListItem disablePadding>
            <Link id='links' to = "/explore">
            <ListItemButton component="a" >
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton></Link>
          </ListItem>

          <ListItem disablePadding>
        
            <ListItemButton component="a"  to="/message">
              <ListItemIcon>
                <Badge badgeContent={4} color="error">
                  <MailIcon color="action" />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Message" />
            </ListItemButton>
            
          </ListItem>

          <ListItem disablePadding>
            <Link id='links' to = "/reels">
            <ListItemButton component="a" >
              <ListItemIcon>
                <AppShortcutIcon/>
              </ListItemIcon>
              <ListItemText primary="Reels" />
            </ListItemButton></Link>
          </ListItem>

          

          <ListItem disablePadding>
            <ListItemButton component="a" to="/notification">
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" to="create">
              <ListItemIcon>
                <AddCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="profile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="switc">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>


          <div className="menu_bar"> 
         <MenuIcon/>
         </div>

        </List>
        <vl/>
      </Box>
     
    </Box>
    
  )
}

