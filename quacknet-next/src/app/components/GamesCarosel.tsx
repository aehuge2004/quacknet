import Carousel from 'react-bootstrap/Carousel';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Imprint from '../images/imprint.svg';
import PondInvadors from '../images/pond-invadors.svg';
import QuackAttack from '../images/quack-attack.svg';


function GamesCarousel() {
  return (
    <Box sx={{ width: '90%', padding: '30px', alignSelf: 'center' }}>
      <Grid container spacing={2}>
        <Grid size={9}>
          <Carousel style={{width: '100%', height: '50vh', margin: '0 auto'}}>
            <Carousel.Item interval={5000} style={{width: '100%', height: '50vh'}}>
              <img src={Imprint} className="d-block w-100" alt="First slide" />
              <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>
                <h3>Game Name</h3>
                <p style={{ fontSize: '14px' }}>
                  Game description. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} style={{width: '100%', height: '50vh'}}>
              <img src={PondInvadors} className="d-block w-100" alt="Second slide" />
              <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>
                <h3>Game Name</h3>
                <p style={{ fontSize: '14px' }}>
                  Game description. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} style={{width: '100%', height: '50vh'}}>
              <img src={QuackAttack} className="d-block w-100" alt="Third slide" />
              <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>
                <h3>Game Name</h3>
                <p style={{ fontSize: '14px' }}>
                  Game Description. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>                    
          </Carousel>
        </Grid>
        <Grid size={3}>
          <Stack spacing={2}>
            <img src={Imprint} style={{width: '100%', height: '15vh'}}></img>
            <img src={PondInvadors} style={{width: '100%', height: '15vh'}}></img>
            <img src={QuackAttack} style={{width: '100%', height: '15vh'}}></img>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default GamesCarousel;


