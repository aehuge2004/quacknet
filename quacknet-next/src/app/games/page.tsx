'use client';
import Box from '@mui/material/Box'
import GamesCarousel from '../components/GamesCarosel';
import GamesHeader from '../components/GamesHeader';
import GameLibraryCard from '../components/GameLibraryCard';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Game } from '@/types/games';
import FilterHeader from '../components/FilterHeader';
import SearchBar from '../components/SearchBar';
import FilterOptions from '../components/FilterOptions';
import Grid from '@mui/material/Grid';
import Menu from '../components/Menu';

function GamesPage() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchGames = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/games');
          if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
          const data = await response.json();
          console.log('Fetched games:', data); // confirm data is coming in
          setGames(data);
        } catch (err) {
          console.error('Failed to fetch games:', err);
        } finally {
          setLoading(false);
        }
    };
    
    fetchGames();
  }, []);

  if (loading) {
    return (
      <main>
        <Menu />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src="/favicon.ico" alt="Loading..." style={{ width: '50px', height: '50px', animation: 'spin 2s linear infinite' }} />
        </Box>
      </main>
    );
  }

  return (
    <main>
      <Menu />
      <div>
        <Box sx={{height: '20vh'}}></Box>
        <GamesCarousel games={games}/>
        <Box sx={{height: '5vh'}}></Box>
        <GamesHeader/> 
        
        <Stack direction="row" spacing={2} useFlexGap sx={{justifyContent: "flex-start", alignItems: "center", width: '100%', flexWrap: 'wrap', marginTop: '5vh'}}>
          <Box sx={{width: '1vw'}}></Box>
          <SearchBar />
          <Box sx={{width: '15vw'}}></Box>
          <FilterHeader />
        </Stack>
        <Box sx={{height: '5vh'}}></Box>
        {/* MAKE SPACE FOR FILTER IN A SECODARY STACK*/}
        <Grid container spacing={2} sx={{padding: 2, borderRadius: 2}}>
          <Grid size={3}>
            <FilterOptions />
          </Grid>
          <Grid size={9}>
            <Stack direction="row" spacing={2} useFlexGap sx={{justifyContent: "space-evenly", alignItems: "center", width: '100%', flexWrap: 'wrap'}}>
              {games.map((game) => (
                <GameLibraryCard key={game.game_id} game={game} />
              ))}
            </Stack>
          </Grid>

        </Grid>
      </div>

    </main>

  );
}

export default GamesPage;