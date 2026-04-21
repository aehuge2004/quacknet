import Stack from '@mui/material/Stack'
import Hero from '../images/Hero-Banner.svg'
import HomeCard from '../components/HomeCard'


function HomePage() {

  return (
    <div>
        <img style={{ width: '100%', height: 'auto'}} src={Hero} alt="hero banner of the QuackBox"></img> 
        <Stack style={{padding: '40px', justifyContent: 'center', alignItems: 'center'}}>
            <HomeCard/>  
        </Stack> 
    </div>
  );
}

export default HomePage;