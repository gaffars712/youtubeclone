import React from 'react'
import { useState,useEffect } from 'react';
import { Box,Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from './FachfromAPI';
import Channelcard from './Channelcard';
import Videocard from './Videocard';
const Channeldetails = () => {
  const [channeldetails, setchanneldetails] = useState()
  const [videos, setvideos] = useState([])
  const {id} = useParams()
  console.log(videos)
  useEffect(()=>{
    fetchFromAPI( `channels?part=snippet&id=${id}`)
    .then((data)=>setchanneldetails(data?.items[0]))

    fetchFromAPI( `search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setvideos(data?.items))
  },[id])
  if(!videos?.length) return 'Lodding...'


  return (
    <Box  minHeight='95vh'> 
    <Box>
      <div  style={{background: 'rgb(2,0,36)', marginBottom:"-93px",
background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,102,7,1) 27%, rgba(121,9,120,1) 35%, rgba(153,6,168,1) 50%, rgba(82,64,183,1) 67%, rgba(4,128,199,1) 77%, rgba(3,218,187,1) 90%, rgba(0,212,255,1) 100%)', height:"310px",zIndex:10}}>
  </div>
  <Channelcard channelDetail={channeldetails} />
  </Box>
  <Box display='flex' p='2' direction='row' flexWrap={'wrap'}   justifyContent="start" alignItems="start" gap={6} >
  {videos.map((video) => (
    <Box sx={{mr:{ sm:'100px'}}}>
    <Videocard key={video.id} video={video} />
</Box>
  ))}


  </Box>
 
    </Box>
  )
}

export default Channeldetails;
