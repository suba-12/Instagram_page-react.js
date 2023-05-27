import { Route, Routes} from 'react-router-dom';

import Home from './Pages/Home'
import Sear from './Pages/Sear';
import Expnav from './Pages/Expnav';
import Notnav from './Pages/Notnav';
import Messagenav from './Pages/Messagenav';
import Profilenav from './Pages/Profilenav';
import Create_nav from './Pages/Create_nav';
import Reel_nav from './Pages/Reel_nav';

function App() {
  
  return (
    <div> 
      {
        
      
        <Routes>
          <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Sear />} />
          <Route path="/explore" element={<Expnav/>} />
        <Route path="/notification" element={<Notnav/>}/>
         <Route path="/message" element={<Messagenav/>} />
          <Route path="/reels" element={<Reel_nav/>} />
          <Route path="/profile" element={<Profilenav/>} />
          <Route path="/create" element={<Create_nav/>} />
          
        </Routes>
        
        
      }
    </div>
  );
}

export default App;
