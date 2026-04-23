'use client';
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { Button, Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import HomeCard from "./components/HomeCard";




export default function Home() {
  const router = useRouter()
  return (
    <main>
      <header className="App-header">
          <Box sx={{ position: 'fixed', x: 0, y: 0, display: 'flex', alignItems: 'left', textAlign: 'left', width: '100vw', backgroundColor: '#99D6DE', filter: 'drop-shadow(0px 2px 2px #000000)', zIndex: 1000 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', padding: '1vw' }}>
              <Image src="/images/Duck.png" width={50} height={50} alt="duck logo"/>
              <Button variant="text" disableRipple sx={{ fontSize: 36, color: 'black', fontWeight: 'bolder', padding: '6px 12px', lineHeight: 1.5, textTransform: 'none'}}>QuackNet</Button>
            </Box>
            <Box sx={{width: '60%'}}></Box>
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
      <Box sx={{height: '10vh'}}></Box>
      <div>
        <img style={{ width: '100%', height: 'auto'}} src="/images/Hero-Banner.svg" alt="hero banner of the QuackBox"></img> 
        <Stack style={{padding: '40px', justifyContent: 'center', alignItems: 'center'}}>
            <HomeCard/>  
        </Stack> 
    </div>
    </main>
  );
}
