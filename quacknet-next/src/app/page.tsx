'use client';
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { Button, Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import HomeCard from "./components/HomeCard";
import Menu from "./components/Menu";

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <Menu />
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
