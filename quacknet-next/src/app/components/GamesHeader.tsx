'use client';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Ducks from '../images/ducks-left.svg'
import Duck from '../images/single-duck.svg'

export default function GamesHeader() {
  return (
    <Stack direction="row" spacing={2} sx={{justifyContent: "space-between", alignItems: "flex-start", width: '100%'}}>
        <img src={Ducks} style={{width: '15%', height: '10vh'}}></img>
        <h1 style={{color: 'white', fontWeight: 'bolder', textAlign: 'center'}}>All Games</h1>
        <img src={Duck} style={{width: '15%', height: '10vh'}}></img>
    </Stack>
  );
}