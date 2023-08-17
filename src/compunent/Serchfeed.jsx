import React from 'react';
import { useState,useEffect } from 'react';
import { Box,Typography } from '@mui/material';
import Videos from './Videos';
import { fetchFromAPI } from './FachfromAPI';
import { useParams } from 'react-router-dom';

const Serchfeed = () => {
  const [videos, setvideos] = useState([])
 const {searchtem} = useParams();

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchtem}`)
      .then((data) => setvideos(data.items))

    }, [searchtem]);

  return (
    <Box  p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
      <Typography variant='h4' m='auto' fontWeight={'bold'} sx={{color:"white",mb:2}}> 
      Search Results for : 
       <span style={{color:"#f31503"}}> {searchtem}</span>
      </Typography>
      <Videos vides={videos}/>
      </Box>
  )
}

export default Serchfeed;
