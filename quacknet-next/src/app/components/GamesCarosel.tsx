'use client';
import Carousel from 'react-bootstrap/Carousel';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SideCarouselItem from './SideCarouselDisplay';
import { Game } from '@/types/games';
import React from 'react';



function GamesCarousel({games}: {games: Game[]}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  return (
    <Box sx={{ width: '90%', padding: '30px', alignSelf: 'center' }}>
      <Grid container spacing={2}>
        <Grid size={9}>
          <Carousel 
          activeIndex={activeIndex}
          onSelect={(index) => setActiveIndex(index)}
          interval={5000}
          style={{width: '100%', height: '50vh', margin: '0 auto'}}
          >
            {games.slice(0, 3).map((game) => {
              return (
                  <Carousel.Item style={{width: '100%', height: '50vh'}}>
                    <img src={game.cover_image} className="d-block w-100" alt="First slide" width={100} height={100} />
                    <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px' }}>
                      <h3>{game.title}</h3>
                      <p style={{ fontSize: '14px' }}>
                          {game.summary}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
              )
            })}
          </Carousel>
        </Grid>
        <Grid size={3}>
          <Stack spacing={2}>
            {games.slice(0, 3).map((game, index) => (
              <Box
                key={game.id}
                onClick={() => setActiveIndex(index)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeIndex === index ? '2px solid rgba(153,214,222,0.85)' : '2px solid transparent',
                  borderRadius: 1,
                  opacity: activeIndex === index ? 1 : 0.6,
                  transition: 'opacity 0.3s ease, border 0.3s ease',
                }}
              >
                <img
                  src={game.cover_image}
                  alt={game.title}
                  style={{ width: '100%', height: '80px', objectFit: 'cover', display: 'block' }}
                />

                {/* Dark overlay on inactive items */}
                {activeIndex !== index && (
                  <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    // backgroundColor: 'rgba(0,0,0,0.4)',
                  }} />
                )}

                {/* Timer bar — only on active item, re-mounts on index change to restart animation */}
                {activeIndex === index && (
                  <div
                    key={`timer-${index}-${activeIndex}`} 
                    className="timer-bar"
                  />
                )}
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default GamesCarousel;