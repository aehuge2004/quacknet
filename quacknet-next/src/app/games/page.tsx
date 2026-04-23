'use client';
import Box from '@mui/material/Box'
import GamesCarousel from '../components/GamesCarosel';
import GamesHeader from '../components/GamesHeader';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';
import GameLibraryCard from '../components/GameLibraryCard';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Game } from '@/types/games';
import FilterHeader from '../components/FilterHeader';
import SearchBar from '../components/SearchBar';

function GamesPage() {
    const [games, setGames] = useState<Game[]>([]);
  
    useEffect(() => {
      const fetchGames = async () => {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        console.log('Fetched games:', data); // confirm data is coming in
        setGames(data);
      } catch (err) {
        console.error('Failed to fetch games:', err);
      }
  };

  fetchGames();
}, []);

  return (
    <main>
      <header className="App-header">
        <Box sx={{ position: 'fixed', x: 0, y: 0, display: 'flex', alignItems: 'left', textAlign: 'left', width: '99vw', backgroundColor: '#99D6DE', filter: 'drop-shadow(0px 2px 2px #000000)', zIndex: 1000 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', padding: '1vw' }}>
            <Image src="/images/Duck.png" width={50} height={50} alt="duck logo"/>
            <Link href="/">
              <Button variant="text" disableRipple sx={{ fontSize: 36, color: 'black', fontWeight: 'bolder', padding: '6px 12px', lineHeight: 1.5, textTransform: 'none'}}>QuackNet</Button>
            </Link>
          </Box>            
          <Box sx={{width: '60%'}}></Box>
          {/* UNCOMMENT THIS LINK WHEN LINK ACCOUNT BECOMES AVAILABLE*/}
            
            {/* <Link href="/link-account" style={{ textDecoration: 'none', alignContent: 'center' }}>
              <Button variant="text" sx={{color: 'black', textTransform: 'none', fontWeight: 'bold'}}>Link Account</Button>
            </Link> */}
            
            <Link href="/games" style={{ textDecoration: 'none', alignContent: 'center' }}>
              <Button variant="text" sx={{color: 'black', textTransform: 'none', fontWeight: 'bold'}}>Games</Button>
            </Link>
            <Link href="/profile" style={{ textDecoration: 'none', alignContent: 'center' }}>
              <Button variant="contained" sx={{color: 'white', backgroundColor: '#1F5960', textTransform: 'none', fontWeight: 'bold', marginLeft: '1vw'}}>Profile</Button>
            </Link>
          </Box>
      </header>
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
        <Stack direction="row" spacing={2} useFlexGap sx={{justifyContent: "space-evenly", alignItems: "center", width: '100%', flexWrap: 'wrap'}}>
            {games.map((game) => (
              <GameLibraryCard key={game.id} game={game} />
            ))}
        </Stack>
      </div>

    </main>

  );
}

export default GamesPage;