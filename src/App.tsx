import React from 'react'
import { useEffect } from 'react'
import Duck from './images/Duck.png'
import './App.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Home from './pages/home'
import Games from './pages/games'
import { Link, Routes, Route } from 'react-router-dom'



function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ position: 'fixed', x: 0, y: 0, display: 'flex', alignItems: 'left', textAlign: 'left', width: '99vw', backgroundColor: '#99D6DE', filter: 'drop-shadow(0px 2px 2px #000000)', zIndex: 1000 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', padding: '1vw' }}>
              <img style={{ width: '50px', height: '50px'}} src={Duck} alt="duck logo"></img>
              <Button variant="text" disableRipple sx={{ fontSize: 36, color: 'black', fontWeight: 'bolder', padding: '6px 12px', lineHeight: 1.5, textTransform: 'none'}}>QuackNet</Button>
            </Box>
            <Box sx={{width: '60%'}}></Box>
            <Link to ="/link-account" style={{ textDecoration: 'none', alignContent: 'center' }}>
              <Button variant="text" sx={{color: 'black', textTransform: 'none', fontWeight: 'bold'}}>Link Account</Button>
            </Link>
            <Link to ="/games" style={{ textDecoration: 'none', alignContent: 'center' }}>
              <Button variant="text" sx={{color: 'black', textTransform: 'none', fontWeight: 'bold'}}>Games</Button>
            </Link>
            <Link to ="/profile" style={{ textDecoration: 'none', alignContent: 'center' }}>
              <Button variant="contained" sx={{color: 'white', backgroundColor: '#1F5960', textTransform: 'none', fontWeight: 'bold', marginLeft: '1vw'}}>Profile</Button>
            </Link>
          </Box>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </header> 
    </div>
  );
}

export default App;
