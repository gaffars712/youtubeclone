import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './compunent/Navbar';
import Feed from './compunent/Feed';
import Videodetails from './compunent/Videodetails';
import Channeldetails from './compunent/Channeldetails';
import Serchfeed from './compunent/Serchfeed';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Box sx={{ background: "#000" }}>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route exact path='/video/:id' element={<Videodetails />} />
            <Route exact path='/channel/:id' element={<Channeldetails />} />
            <Route exact path='/search/:searchtem' element={<Serchfeed />} />





          </Routes>
        </Box>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
