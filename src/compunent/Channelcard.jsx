import React from 'react'
import { CardContent , Card , Typography, CardMedia, Box } from '@mui/material'
import { CheckCircle, HelpOutline } from '@mui/icons-material';
import { demoProfilePicture } from './Constants';
import { Link } from 'react-router-dom';

const Channelcard = ({channelDetail}) => {
  console.log(channelDetail)
  return (<Box sx={{boxShadow:"none",borderRadius:'50px', display:"flex",justifyContent:"center",alignItems:"center",width:{xs:"356px", md:"320px", },margin:"auto"}}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display:"flex",justifyContent:"center",textAlign:"center",color:"#fff",flexDirection:"column"}}>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} 
        sx={{ width:180, height: 180 ,borderRadius:"50%",mb:2 , border:'1px solid #e3e3e3'}}/>
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px",mt:'3px' }} />
        </Typography>

      </CardContent>
    </Link>
  </Box>
  )
}

export default Channelcard
