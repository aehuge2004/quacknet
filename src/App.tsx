import React from 'react'
import { useEffect } from 'react'
import Home from './pages/home'
import Duck from './images/Duck.png'
import './App.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';



function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: '100%', backgroundColor: '#99D6DE' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', padding: '1vw' }}>
              <img style={{ width: '50px', height: '50px'}} src={Duck} alt="duck logo"></img>
              <Button variant="text" disableRipple sx={{ fontSize: 36, color: 'black', fontWeight: 'bolder', padding: '6px 12px', lineHeight: 1.5, textTransform: 'none'}}>QuackNet</Button>
            </Box>
            <Box sx={{width: '50%'}}></Box>
            <Button variant="text" sx={{color: 'black', textTransform: 'none', fontWeight: 'bold'}}>Link Account</Button>
            <Button variant="text" sx={{color: 'black', textTransform: 'none', fontWeight: 'bold'}}>Games</Button>
            <Button variant="text" sx={{color: 'black', textTransform: 'none', fontWeight: 'bold'}}>About COMS</Button>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
              >
                <Button variant="contained" sx={{color: 'white', backgroundColor: '#1F5960', textTransform: 'none', fontWeight: 'bold'}}>Profile</Button>
              </IconButton>
          </Box>
        </React.Fragment>

        <Home/>
      </header> 
    </div>
  );
}

export default App;
