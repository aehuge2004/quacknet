'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users } from "@/types/users"

const ThemedTextField = styled(TextField)({
  '& label.Mui-focused': { color: '#1F5960' },
  '& .MuiInput-underline:after': { borderBottomColor: '#949494' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: '#949494' },
    '&:hover fieldset': { borderColor: '#949494' },
    '&.Mui-focused fieldset': { borderColor: '#1F5960' },
  },
});

export default function SignInField({ authenticated }: {user: Users[]}) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useUser();
    
  
  const handleSignIn = async () => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.message ?? "Invalid credentials");
        return;
      }

      const data = await response.json();
      setUser(data.user);      // ← store user in context before navigating
      router.push("/profile");
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };
  
  const handleSignIn = async () => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.message ?? "Invalid credentials");
        return;
      }

      router.push("/profile");
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'white', width: '30vw', padding: '2vw', borderRadius: '10px' }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#000000', fontWeight: 'bold' }}>
        Sign In
      </Typography>

      <ThemedTextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ m: 1, width: '100%' }}
      />
      <ThemedTextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ m: 1, width: '100%' }}
      />

      {/* Error message — only renders when set */}
      {errorMessage && (
        <Typography variant="body2" sx={{ color: 'red', alignSelf: 'flex-start', ml: 1 }}>
          {errorMessage}
        </Typography>
      )}

      <Typography variant="body2" sx={{ alignSelf: 'flex-start' }}>
        <a href="/forgot-password" style={{ color: '#1F5960', fontWeight: 'bold', display: 'flex' }}>Forgot Password?</a>
      </Typography>
      <Button
        onClick={handleSignIn}
        variant="contained"
        sx={{ mt: 3, backgroundColor: '#1F5960', color: 'white', width: '90%', textTransform: 'none', fontWeight: 'bold' }}
      >
        Sign In
      </Button>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'normal', fontSize: '14px', alignSelf: 'center', marginTop: '10px' }}>
          Don't have an account? <a href="/create-account" style={{ color: '#1F5960', fontWeight: 'bold' }}>Create an Account</a>
        </Typography>
      </Stack>

      <Divider sx={{ width: '100%', my: 3, backgroundColor: '#838785', borderStyle: 'dashed' }} />
      <Typography variant="body2">or continue with:</Typography>
      <Button variant="outlined" startIcon={<img src="/images/GoogleIcon.png" alt="icon" width={18} height={18} />} sx={{ mt: 2, width: '90%', color: 'black', borderColor: '#1F5960', textTransform: 'none' }} disabled>
        Sign in with Google
      </Button>
      <Button variant="outlined" startIcon={<img src="/images/RIT.svg" alt="icon" width={40} height={24} />} sx={{ mt: 2, width: '90%', color: 'black', borderColor: '#1F5960', textTransform: 'none' }} disabled>
        Sign in with RIT
      </Button>
    </Box>
  );
}