import React from 'react';
import Box from '@mui/material/Box'
import GamesCarousel from '../components/GamesCarosel';
import GamesHeader from '../components/GamesHeader';


function GamesPage() {

  return (
    <div>
        <Box sx={{height: '20vh'}}></Box>
        <GamesCarousel/>
        <Box sx={{height: '5vh'}}></Box>
        <GamesHeader/>  
    </div>
  );
}

export default GamesPage;