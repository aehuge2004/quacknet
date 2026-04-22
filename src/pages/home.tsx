import Stack from '@mui/material/Stack'
import Hero from '../images/Hero-Banner.svg'
import HomeCard from '../components/HomeCard'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box'


function HomePage() {

  return (
    <div>
      <Box sx={{height: '10vh'}}></Box>
        <img style={{ width: '100%', height: 'auto'}} src={Hero} alt="hero banner of the QuackBox"></img> 
        <Stack style={{padding: '40px', justifyContent: 'center', alignItems: 'center'}}>
            <HomeCard/>  
        </Stack> 
    </div>
  );
}

export default HomePage;