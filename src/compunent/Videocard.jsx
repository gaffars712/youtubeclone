import React from 'react'
import { Link } from 'react-router-dom';
import { Typography,Card, CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoChannelTitle,demoChannelUrl,demoVideoTitle } from './Constants';

const Videocard = ({video}) => {
  console.log(video)
  return (
    <h1>videocard</h1>
  )
}

export default Videocard;
