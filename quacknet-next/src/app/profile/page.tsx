'use client';
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { Button, Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import Menu from "../components/Menu";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import UserProfileInformation from '../components/UserProfileInformation'
import IdLinkProfile from '../components/IdLinkProfile'
import DangerZone from '../components/DangerZone'
import { useUser } from '../context/UserContext';
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
    const { user } = useUser();
    // Guard: redirect to sign-in if there's no user (e.g. direct URL access)
    useEffect(() => {
        if (!user) router.push('/sign-in');
    }, [user]);

    if (!user) return null; // prevent flash of content before redirect

    console.log(user)

  return (
    <main style={{height: '100vh'}}>
        <Menu />
        <Box sx={{height: '15vh'}}></Box>
        <div> 

            <Grid container spacing={3} sx={{padding: '1vw'}}>
                <Grid size={3}>
                    <Stack direction="column" sx={{alignItems: 'center', gap: 2}}>
                        <img src="/images/profile-icon.svg" alt="Profile Icon" width={'100%'} height={200} />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white'}}>
                            {user.username}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={3}>
                    <UserProfileInformation user={user}/>
                </Grid>
                <Grid size={3}>
                    <IdLinkProfile />
                </Grid>
                <Grid size={3}>
                    <DangerZone />
                </Grid>
            </Grid>
            
        </div>
    </main>
  );
}