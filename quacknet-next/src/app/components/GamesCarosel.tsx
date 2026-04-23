'use client';
import Carousel from 'react-bootstrap/Carousel';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import CarouselItem from './CarouselItem';
import SideCarouselItem from './SideCarouselDisplay';

import { useEffect, useState } from 'react';
import { Game } from 'quacknet-next/types/games.ts';


function GamesCarousel() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('/api/games');
      const data = await response.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <Box sx={{ width: '90%', padding: '30px', alignSelf: 'center' }}>
      <Grid container spacing={2}>
        <Grid size={9}>
          <Carousel style={{width: '100%', height: '50vh', margin: '0 auto'}}>
            {games.map((game) => (
              <CarouselItem key={game.id} imageSrc={game.image} title={game.name} description={game.description} />
            ))}
          </Carousel>
        </Grid>
        <Grid size={3}>
          <Stack spacing={2}>
            {games.map((game) => (
              <SideCarouselItem key={game.id} imageSrc={game.image} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default GamesCarousel;


            {/* <Carousel.Item interval={5000} style={{width: '100%', height: '50vh'}}>
              <Image src="/images/Long-way-duck.svg" className="d-block w-100" alt="First slide" width={100} height={100} />
              <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px' }}>
                <h3>Long Way Duck</h3>
                <p style={{ fontSize: '14px' }}>
                  Game description. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} style={{width: '100%', height: '50vh'}}>
              <Image src="/images/pond-invadors.svg" className="d-block w-100" alt="Second slide" width={100} height={100} />
              <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px' }}>
                <h3>Game Name</h3>
                <p style={{ fontSize: '14px' }}>
                  Game description. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} style={{width: '100%', height: '50vh'}}>
              <Image src="/images/quack-attack.svg" className="d-block w-100" alt="Third slide" width={100} height={100} />
              <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px' }}>
                <h3>Game Name</h3>
                <p style={{ fontSize: '14px' }}>
                  Game Description. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>                     */}

            {/* <Image src="/images/Long-way-duck-gameplay.png" alt="" width={100} height={100} style={{width: '100%', height: '15vh', borderRadius: '20px'}}></Image>
            <Image src="/images/pond-invadors.svg" alt="" width={100} height={100} style={{width: '100%', height: '15vh'}}></Image>
            <Image src="/images/quack-attack.svg" alt="" width={100} height={100} style={{width: '100%', height: '15vh'}}></Image> */}