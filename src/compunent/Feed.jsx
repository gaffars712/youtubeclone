import React from 'react';
import { useState,useEffect } from 'react';
import { Box,Stack,Typography } from '@mui/material';
import Sidebaar from './Sidebaar'
import Videos from './Videos';
import { fetchFromAPI } from './FachfromAPI';

const Feed = () => {
  const [selectedcetagry, setselectedcetagry] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedcetagry}`)
      .then((data) => setvideos(data.items))

    }, [selectedcetagry]);

  const Fullyear = new Date().getFullYear()
  return (
    <Stack sx={{ flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'}, BorderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}}>
        <Sidebaar selectedcetagry={selectedcetagry} setselectedcetagry={setselectedcetagry} />
        <Typography className='copyright' variant='body2' sx={{color:"#fff", }}>
          Copyright {Fullyear} Gaffar Clone.

        </Typography>
      </Box>
      <Box sx={{height:"90vh",flex:2,overflowY:"auto"}} p={1} >
      <Typography variant='h4' fontWeight={'bold'} sx={{color:"white",mb:2}}> 
      {selectedcetagry} <span style={{color:"#f31503"}}>Video</span>
      </Typography>
      <Videos vides={videos}/>
      </Box>
      { console.log(videos)

}    </Stack>
  )
}

export default Feed;
