import { Box } from '@mui/system'
import React from 'react'
import '../assets/css/style.css'
import img from '../assets/fead11.jpeg'
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import img30 from '../assets/profile_img.jpg'

const Profile = () => (
  <Box bgcolor="white" flex={4} p={2}>
    <div className="app_profile">
      <div className="profile_container">
        <div className="profile_img-container" id="img">
          <img src={img} alt="Avatar " />
        </div>
        <div className="user_profile_content">
          <div className='username'>
            <p>Sowmiya_19</p>
            <button>Edit Profile</button>
            <SettingsIcon />
          </div>


          <div className='followers'>
            <p><span>50</span> Posts</p>
            <p><span>1000</span> Followers</p>
            <p><span>5000</span> Following</p>
          </div>

          <div className="bio">
            <p>Sowmiya </p>
            <p>Loyal atitude !!!</p>
            <p>Blue Lover .</p>
            <p>Be a PRIOITY not a CHOICE !.</p>
             </div>

        </div>
      </div>
    </div>
    <hr />
    <div className="profile_tags">
      <ul className="tags_header">
        <AppsOutageIcon />
        <li> POST</li>
        < BookmarkBorderIcon />
        <li> SAVED</li>
        < PermContactCalendarIcon />
        <li>TAGGED</li>
      </ul>
      </div>

     
        <div className="user_post_content">
        <div className="user_down">
          <img src={img30} alt="Avatar " />
          </div>
          <div id ="space" ><p><h1>Share Posts</h1></p><div>
          </div>
             </div>
          <div className='text'>
            <p> When you share photos,they will appear onn your profile</p>
             <p><span>share your first photo</span> </p> 
             </div>
             </div>
        
        <div className="end_text">
          <ul className="pro_text">
            <li>Meta</li>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Help</li>
            <li>API</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>TopAccounts</li>
             </ul>
             
            <div id ="end"> <p> Contact Uploding & Non-User</p>
            </div>

           <div id ="endl"> <p><span>English ^ @2023 Instagram from Meta</span></p></div>
             </div>
         
          
  </Box>
)

export default Profile
