'use client'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

const theme = createTheme() // customize this as needed

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}