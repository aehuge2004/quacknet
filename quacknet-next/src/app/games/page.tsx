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
import { Filter } from '@/types/game_filter_interface';

function GamesPage() {
  const [filter, setFilter] = useState<Filter>({});

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
    // Pass to your backend filter function here, e.g.:
    // applyFilter(newFilter);
  };
  
    useEffect(() => {
      const fetchGames = async () => {
      try {
        // console.log("Filter:", filter)
        const response = await fetch("/api/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filter),
        });
        // console.log(response)
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        console.log('Fetched games:', data); // confirm data is coming in
        setGames(data);
      } catch (err) {
        console.error('Failed to fetch games:', err);
      }
  };

  fetchGames();
}, [filter]);

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
          <SearchBar
            value={filter.text_search ?? ""}
            onChange={(val: string) =>
              setFilter(prev => ({ ...prev, text_search: val }))
            }
          />
          <Box sx={{width: '15vw'}}></Box>
          <FilterHeader 
            value={filter.order_type}
            onChange={(value: Filter["order_type"]) => {
              console.log(value)
              setFilter(prev => ({
                ...prev,
                order_type: value
              }))
            }
            }
          />
        </Stack>
        <Box sx={{height: '5vh'}}></Box>
        {/* MAKE SPACE FOR FILTER IN A SECODARY STACK*/}
        <Grid container spacing={2} sx={{padding: 2, borderRadius: 2}}>
          <Grid size={3}>
            <FilterOptions onFilterChange={handleFilterChange} />
          </Grid>
          <Grid size={9}>
            <Stack direction="row" spacing={5} useFlexGap sx={{justifyContent: "flex-start", alignItems: "center", flexWrap: 'wrap', marginLeft: '4vw'}}>
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