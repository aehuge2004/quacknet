'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function SignInField() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
        <h1>Sign In</h1>
        <TextField label="Username" variant="outlined" sx={{ m: 1, width: '300px' }} />
        <TextField label="Password" variant="outlined" sx={{ m: 1, width: '300px' }} />
        <Typography variant="body2" sx={{ mt: 2 }}>
            <a href="/forgot-password" style={{ color: '#1F5960', fontWeight: 'bold' }}>Forgot Password?</a>
        </Typography>
        <Button variant="contained" sx={{ mt: 3, backgroundColor: '#1F5960', color: 'white', width: '150px' }}>
            Sign In
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account? <a href="/sign-up" style={{ color: '#1F5960', fontWeight: 'bold' }}>Create Account</a>
        </Typography>
        <Divider sx={{ width: '100%', my: 3, backgroundColor: '#838785', borderStyle: 'dashed' }} />
    </Box>
  );
}