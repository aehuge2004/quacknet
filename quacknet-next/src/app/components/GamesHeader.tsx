'use client';
import Stack from '@mui/material/Stack'
import Image from 'next/image'


export default function GamesHeader() {
  return (
    <Stack direction="row" spacing={2} sx={{justifyContent: "space-between", alignItems: "flex-start", width: '100%'}}>
        <Image src="/images/ducks-left.svg" alt="" width={150} height={100} style={{width: '15%', height: '10vh'}}></Image>
        <h1 style={{color: 'white', fontWeight: 'bolder', textAlign: 'center'}}>All Games</h1>
        <Image src="/images/single-duck.svg" alt="" width={150} height={100} style={{width: '15%', height: '10vh'}}></Image>
    </Stack>
  );
}