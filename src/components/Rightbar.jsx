import { Box, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import React from 'react'
import image2 from '../assets/avatar1.jpg'
import image3 from '../assets/avatar2.jpeg'
import image4 from '../assets/avatar3.jpeg'
import image5 from '../assets/avatar4.jpg'
import img from '../assets/fead11.jpeg'

export const Rightbar = () => {
  return (
    <Box 
    flex={2}
     p={2}
     sx={{display:{xs:"none",sm:"block"},position:"sticky"}}
     >
      <Box >
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy sharp" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary="_Sowmiya_19"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sowmiya_ravavan
              </Typography>
            </React.Fragment>
          }
        /> 
      </ListItem>
      </List>
      </Box>

      <Box >
      <Typography variant="h6" fontWeight ={100} mt={2} mb={2}>Suggestion for you</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy sharp" src={image2} />
        </ListItemAvatar>
        <ListItemText
          primary="_MS_tuffy"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {" followed by gayathrisat"}
              <Typography id="fol"> Follow</Typography>
            </React.Fragment>
          }
        /> 
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={image3} />
        </ListItemAvatar>
        <ListItemText
          primary="Mr_luvly_luverr"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {" followed byopha_May_Mohana"}
              <Typography id="fol"> Follow</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={image4} />
        </ListItemAvatar>
        <ListItemText
          primary="goneMad_love"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
             {" followed by gv_Bae.girl"}
              <Typography id="fol"> Follow</Typography>
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={image5} />
        </ListItemAvatar>
        <ListItemText
          primary="black_kiddo_03"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {" followed by Balaji"}
              <Typography id="fol"> Follow</Typography>
            </React.Fragment>
          }
        />
        </ListItem>
    </List>
    <Typography id="cor"> About.Help.Press.Jobs.Privacy.Terms.location</Typography>
    <Typography id="cor">@2023 INSTAGRAM FROM META</Typography>
      </Box>

      </Box>
  )
}
