'use client';
import SignInField from "../components/SignInField";
import Menu from "../components/Menu";
import Box from '@mui/material/Box';

export default function SignIn() {
    return (
        <main>
            <Menu />
            <Box sx={{height: '20vh'}}></Box>
            <SignInField />
        </main>
    );
}