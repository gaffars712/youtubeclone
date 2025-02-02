import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './compunent/Navbar';
import Feed from './compunent/Feed';
import Videodetails from './compunent/Videodetails';
import Channeldetails from './compunent/Channeldetails';
import Serchfeed from './compunent/Serchfeed';


function App() {
  return(
  <BrowserRouter>
  <Box sx={{background:"#000"}}>
    <Navbar/>

    <Routes>  
      <Route exact path='/youtubeclone' element={<Feed/>}/>
      <Route exact path='/video/:id' element={<Videodetails/>}/>
      <Route exact path='/channel/:id' element={<Channeldetails/>}/>
      <Route exact path='/search/:searchtem' element={<Serchfeed/>}/>





    </Routes>
  </Box> 
  </BrowserRouter>
  )
}

export default App;
