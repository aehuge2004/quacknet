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

const ThemedTextField = styled(TextField)({
  '& label.Mui-focused': { color: '#1F5960' },
  '& .MuiInput-underline:after': { borderBottomColor: '#949494' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: '#949494' },
    '&:hover fieldset': { borderColor: '#949494' },
    '&.Mui-focused fieldset': { borderColor: '#1F5960' },
  },
});

// ── Password validation ──────────────────────────────────────────────────────
const PASSWORD_RULES = [
  { test: (p: string) => p.length >= 8,            message: "At least 8 characters" },
  { test: (p: string) => /[0-9]/.test(p),          message: "At least one number" },
  { test: (p: string) => /[^a-zA-Z0-9]/.test(p),  message: "At least one special character" },
];

function validatePassword(password: string): string[] {
  return PASSWORD_RULES.filter((rule) => !rule.test(password)).map((rule) => rule.message);
}

export default function CreateAccountFields() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // ── Live validation as user types ─────────────────────────────────────────
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    if (passwordTouched) setPasswordErrors(validatePassword(val));
  };

  // ── Only show errors after first blur so it isn't distracting while typing
  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordErrors(validatePassword(password));
  };

  const handleCreateAccount = async () => {
    // Run all validation before hitting the API
    const errors = validatePassword(password);
    if (errors.length > 0) {
      setPasswordTouched(true);
      setPasswordErrors(errors);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/auth/create-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.message ?? "Failed to create account.");
        return;
      }

      router.push("/profile");
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const passwordInvalid = passwordTouched && passwordErrors.length > 0;
  const confirmMismatch = confirmPassword.length > 0 && confirmPassword !== password;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'white', width: '30vw', padding: '2vw', borderRadius: '10px' }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#000000', fontWeight: 'bold' }}>
        Create an Account
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
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={passwordInvalid}
        sx={{ m: 1, width: '100%' }}
      />

      {/* ── Password requirement hints ── */}
      <Box sx={{ alignSelf: 'flex-start', ml: 1, mb: 0.5 }}>
        {PASSWORD_RULES.map((rule) => {
          const passed = rule.test(password);
          // Always show rules; color them green/red only after the field is touched
          const color = !passwordTouched ? '#888' : passed ? '#2e7d32' : '#d32f2f';
          return (
            <Typography key={rule.message} variant="caption" sx={{ display: 'block', color, fontSize: '11px' }}>
              {passwordTouched ? (passed ? '✓' : '✗') : '•'} {rule.message}
            </Typography>
          );
        })}
      </Box>

      <ThemedTextField
        label="Re-enter Password"
        variant="outlined"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={confirmMismatch}
        helperText={confirmMismatch ? "Passwords do not match." : ""}
        sx={{ m: 1, width: '100%' }}
      />

      {/* ── API-level error ── */}
      {errorMessage && (
        <Typography variant="body2" sx={{ color: 'red', alignSelf: 'flex-start', ml: 1, mt: 0.5 }}>
          {errorMessage}
        </Typography>
      )}

      <Button
        onClick={handleCreateAccount}
        variant="contained"
        sx={{ mt: 3, backgroundColor: '#1F5960', color: 'white', width: '90%', textTransform: 'none', fontWeight: 'bold' }}
      >
        Create Account
      </Button>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'normal', fontSize: '14px', alignSelf: 'center', marginTop: '10px' }}>
          Already have an account? <a href="/sign-in" style={{ color: '#1F5960', fontWeight: 'bold' }}>Sign In</a>
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
