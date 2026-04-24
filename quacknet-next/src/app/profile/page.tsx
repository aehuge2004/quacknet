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


export default function Home() {
  const router = useRouter()
  return (
    <main>
        <Menu />
        <Box sx={{height: '15vh'}}></Box>
        <div> 

            <Grid container spacing={2}>
                <Grid size={3}>
                    <Stack direction="column" sx={{alignItems: 'center', gap: 2}}>
                        <img src="/images/profile-icon.svg" alt="Profile Icon" width={'100%'} height={200} />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white'}}>
                            username
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={3}>
                    <UserProfileInformation/>
                </Grid>
                <Grid size={3}>
                    {/* ID info */}
                </Grid>
                <Grid size={2}>
                    {/* danger zone */}
                </Grid>
            </Grid>
            
        </div>
    </main>
  );
}