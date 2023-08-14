import React from 'react'
import { Link } from 'react-router-dom';
import { Typography,Card, CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoChannelTitle,demoChannelUrl,demoVideoTitle } from './Constants';

const Videocard = ({video: {id: {videoId},snippet}}) => {
  console.log(videoId,snippet)
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <CardMedia sx={{width:358 , height:282}}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
        </CardMedia> 
      </Link>
    </Card>
  )
}

export default Videocard;
