import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Duckies from '../images/Duckies-on-Bench.svg'
import Grid from '@mui/material/Grid';
import Video from './Video';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TwoDucks from '../images/two-ducks.svg'

export default function HomeCard() {
  return (
    <Grid container spacing={10}>
      <Grid size={8}>
        <Video/>
      </Grid>
      <Grid size={4}>
        <Typography component="div" variant="h5" style={{color: 'white', fontWeight: 'bolder', textAlign: 'left'}}>
          The QuackBox
        </Typography>
        <Typography
            variant="body2"
            component="div"
            sx={{ color: 'white', textAlign: 'left' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac orci sed purus pellentesque cursus ut nec leo. Phasellus at risus quis ante auctor facilisis. Fusce iaculis leo eget dui finibus, volutpat tincidunt erat euismod. Donec accumsan eget ligula at interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <img src={TwoDucks} style={{marginTop: '12vh'}}></img>
      </Grid>
      <Grid size={5}>
        <img src={Duckies}/>
      </Grid>
      <Grid size={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        
                <Typography component="div" variant="h5" style={{color: 'white', fontWeight: 'bolder', textAlign: 'left'}}>
            Computing Organization for Multicultural Students (COMS)
        </Typography>
        <Typography
            variant="body2"
            component="div"
            sx={{ color: 'white', textAlign: 'left' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac orci sed purus pellentesque cursus ut nec leo. Phasellus at risus quis ante auctor facilisis. Fusce iaculis leo eget dui finibus, volutpat tincidunt erat euismod. Donec accumsan eget ligula at interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </Typography>
        <Button variant='text' href='https://www.rit.edu/coms/' target='_blank'  endIcon={<ArrowForwardIosIcon/>} sx={{ textTransform: 'none', color: '#99D6DE' }}>Learn more about COMS</Button>
      </Grid>
    </Grid>
  );
}