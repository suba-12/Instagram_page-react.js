
import { Box, ListItem, ListItemAvatar, ListItemText, TextField} from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import image1 from '../assets/tree.jpg'
import fun from '../assets/fead1.jpg'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import fun2 from '../assets/fead2.webp'
import fun3 from '../assets/profile.jpeg'
import image5 from '../assets/avatar4.jpg'
import img1 from '../assets/fead12.webp'
import img2 from '../assets/images.jpg'
import image4 from '../assets/avatar3.jpeg'
import reels from '../assets/ss.png'

import React from 'react'
import MoreVert from '@mui/icons-material/MoreVert';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';



export const Fead = () => {
  
  return (
    <Box  flex={4}  p={2}>
      <div className='reel'>
        <img src={reels} alt="Avatar" />
     </div>
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
            <Avatar alt="Remy sharp" src={fun} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="_Natural_All"
        
      />
      <CardMedia
        component="img"
        height="20%"
        image={image1}
        alt="Nature_god"
      />
      

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkBorder sx={{color:"blue"}}/>} />
        </IconButton>
      </CardActions>

      <CardContent>
        <Typography variant="body2" color="text.secondary">

        
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={image5} />
        </ListItemAvatar>
        <ListItemText
          primary=" Liked by black_kiddo_03 and others
          "
          secondary={
            <React.Fragment>
              
              <Typography id="fol"> Following</Typography>
            </React.Fragment>
          }
        />
        </ListItem>

          <Typography id="dark"><h3>4054 Likes</h3></Typography>
          <h4>This is impressive Place</h4>paella is a perfect party Place and a fun Party to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like....more
        </Typography>
        <Typography id="cor"> View all 29 comments</Typography>
        <Typography id="cor"> 1 Day AGO</Typography>
        
        <TextField
          id="standard-password-input"
          label="Add a Comment....."
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </CardContent>
    </Card>


    
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
            <Avatar alt="Remy sharp" src={img2} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Elamathy_12"
        
      />
      <CardMedia
        component="img"
        height="20%"
        image={img1}
        alt="Yummy_Food"
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkBorder sx={{color:"blue"}}/>} />
        </IconButton>
      </CardActions>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={image4} />
        </ListItemAvatar>
        <ListItemText
          primary=" Liked by _gloomy_anjali_ and others"
          
          secondary={
            <React.Fragment>
              
              <Typography id="fol"> Following</Typography>
            </React.Fragment>
          }
        />
        </ListItem>

          
          <Typography id="dark"><h3>26,372 likes</h3></Typography>
          <h4>dying_for_food Cheese Spam Alert.</h4>
          <h4>1 . Paneer Pizza,O Bete Mauj Kardi,NSP </h4>
          <h4> 2. Chilly Cheese Toast,Cafe Wink</h4>
          <h4>3. Paneer Bruschetta,RunWay</h4>
          <Typography id="fol"> Follow : - @dying_for_food</Typography>

          <h3>#cheese #platter #hungryhunger #paneer #lunchbox....more</h3>
          <h6>Januanry 6,2023</h6>
        </Typography>
        <Typography id="cor"> View all 129 comments</Typography>
        <Typography id="cor"> 1 hour AGO</Typography>
        
        <TextField
          id="standard-password-input"
          label="Add a Comment....."
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </CardContent>
    </Card>

    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
            <Avatar alt="Remy sharp" src={fun2} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="hariynie_sundar_02"
        
      />
      <CardMedia
        component="img"
        height="20%"
        image={fun3}
        alt="Nature_god"
      />
      

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkBorder sx={{color:"blue"}}/>} />
        </IconButton>
      </CardActions>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Typography id="dark"><h3>72,424 likes</h3></Typography>

          <h4>Liked by Se_thu_pathi_ and others</h4>
          #heydushyantha #heydushyantha #yeshoda....more
        </Typography>
        <Typography id="cor"> View all 1678 comments</Typography>
        <Typography id="cor"> 2 hour AGO</Typography>
        
        <TextField
          id="standard-password-input"
          label="Add a Comment....."
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </CardContent>
    </Card>


    </Box>
  )
}