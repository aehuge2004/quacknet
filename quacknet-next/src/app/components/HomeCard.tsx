'use client';
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
        <Video videoSrc="/videos/ImagineRIT_Vid_2025_NoCaption.mp4"/>
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
            The QuackBox is a 3D-printed, duck-shaped gaming console powered by a Raspberry Pi. With a custom user interface and duck-themed versions of classic games, it delivers a truly quacktastic gaming experience!
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
            Our Mission is to build a supportive and all inclusive community that celebrates the talent of underrepresented students in Computing. We work to accomplish our mission by providing mentorship, mental health awareness, and leadership opportunities. Our goal is to create a positive impact on the underrepresented computing community by engaging with local underrepresented students and fostering STEM education.
        </Typography>
        <Button variant='text' href='https://www.rit.edu/computing/coms/' target='_blank'  endIcon={<ArrowForwardIosIcon/>} sx={{ textTransform: 'none', color: '#99D6DE' }}>Learn more about COMS</Button>
      </Grid>
    </Grid>
    
  );
}