import React from 'react';
import Box from '@mui/material/Box'
import GamesCarousel from '../components/GamesCarosel';


function GamesPage() {

  return (
    <div>
        <Box sx={{height: '20vh'}}></Box>
        <GamesCarousel/>
    </div>
  );
}

export default GamesPage;