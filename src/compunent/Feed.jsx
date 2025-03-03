import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebaar from './Sidebaar'
import Videos from './Videos';
import { fetchFromAPI } from './FachfromAPI';
import { Helmet } from 'react-helmet-async';

const Feed = () => {
  const [selectedcetagry, setselectedcetagry] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedcetagry}`)
      .then((data) => setvideos(data.items))

  }, [selectedcetagry]);

  const Fullyear = new Date().getFullYear()
  return (<>
    <Helmet>
      <title>Home - YouTubeClone</title>
      <meta name="keyword" content="youtube,gaffar portfolio, youtubeClone,YouTubeClone, youtube, clone, clone,gaffar," />
    </Helmet>
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, BorderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebaar selectedcetagry={selectedcetagry} setselectedcetagry={setselectedcetagry} />
        <Typography className='copyright' variant='body2' sx={{ color: "#fff", }}>
          Copyright {Fullyear} Gaffar Clone.

        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
        <Typography variant='h4' fontWeight={'bold'} sx={{ color: "white", mb: 2 }}>
          {selectedcetagry} <span style={{ color: "#f31503" }}>Video</span>
        </Typography>
        <Videos vides={videos} />
      </Box>
    </Stack>
  </>)
}

export default Feed;
