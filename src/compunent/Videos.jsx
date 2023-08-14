import React from 'react';
import { Stack, Box } from '@mui/material';
import Videocard from './Videocard';
import Channelcard from './Channelcard';

const Videos = ( {vides} ) => {
  console.log(vides)
  return (
    <Stack   justifyContent="start" alignItems="start" gap={3}>
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
