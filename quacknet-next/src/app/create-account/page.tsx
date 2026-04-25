'use client';
import CreateAccountFields from "../components/CreateAccountFields";
import Menu from "../components/Menu";
import Box from '@mui/material/Box';

export default function CreateAccount() {
    return (
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
            <Menu />
            <Box sx={{height: '20vh'}}></Box>
            <CreateAccountFields />
        </main>
    );
}