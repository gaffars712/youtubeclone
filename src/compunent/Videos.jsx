import React from 'react';
import { Stack, Box } from '@mui/material';
import Videocard from './Videocard';
import Channelcard from './Channelcard';

const Videos = ( {vides, direction} ) => {
  if(!vides?.length) return'Lodding....'
  console.log(vides)
  return (
    <Stack direction={direction ||'row'} flexWrap={'wrap'}   justifyContent="start" alignItems="start" gap={6}>
      {vides.map((item,idx) => {
        return(     
           <Box key={idx}>
         {item.id.videoId && <Videocard video={item} /> }
         {item.id.channelId &&  <Channelcard channelDetail={item} />}
        </Box>
        

      )})}
    </Stack>
  );
}


export default Videos;
