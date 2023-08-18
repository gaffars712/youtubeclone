import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Typography , Stack , Box } from '@mui/material';
import { CheckCircle, FactCheck } from '@mui/icons-material';
import Videos from './Videos';
import { fetchFromAPI } from './FachfromAPI';
const Videodetails = () => {
  const [videosdetails, setvideosdetails] = useState(null);
  const [videos, setvideos] = useState(null)
  const {id} = useParams();


  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statics&id=${id}`)
    .then((data)=> setvideosdetails(data.items[0]) )

    fetchFromAPI(`search?part=snippet&relatedToVideoid=${id}&type=video`)
    .then((data)=>setvideos(data.items))
  },[id])

  if(!videosdetails?.snippet)return ' loding...'
    const {snippet:{title, channelId , channelTitle},statistics:{viewCount,likeCount}}=videosdetails;
  return (
    <Box minHeight='96vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:"100%", top:"95px"}}>
            <ReactPlayer  className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography color={'#fff'} fontWeight={'bold'} variant='h5' p={'2'}>
            {title}
              </Typography>
              <Stack direction={'row'} justifyContent={'space-between'} sx={{color:"#fff"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle',md:'h6'}} color={'#fff'}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize:"12px",color:"gray" } } />
                </Typography>
              </Link>
              <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                <Typography variant='body1' sx={{opacity:"0.7"}}>
                  {parseInt(viewCount).toLocaleString()}  Views 
                </Typography>
                <Typography variant='body1' sx={{opacity:"0.7"}}>
                  {parseInt(likeCount).toLocaleString()}  Likes 
                </Typography>
              </Stack>
              </Stack>
              
          </Box>

        </Box>
      <Box px={2} py={{md:1,xs:5}} justifyContent={'center' } alignItems={'center'}>
         <Videos vides={videos} direction='column'/>

      </Box>
      </Stack>
      
    </Box>
  )
}

export default Videodetails;
