import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-poppins), sans-serif',
  },
});

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}