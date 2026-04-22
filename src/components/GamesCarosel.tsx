import Carousel from 'react-bootstrap/Carousel';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


function GamesCarousel() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Carousel style={{width: '100%', height: '100%', margin: '0 auto'}}>
            <Carousel.Item interval={1000}>
                <img src="/logo512.png" className="d-block w-100" alt="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                        <img src="/logo512.png" className="d-block w-100" alt="Second slide" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/logo512.png" className="d-block w-100" alt="Third slide" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>                    
                </Carousel>
        </Grid>
        <Grid size={4}>
          <Stack spacing={2}>
            <img src="/logo512.png" style={{width: '100%', height: 'auto'}}></img>
          </Stack>
        </Grid>
        
      </Grid>
    </Box>
    
  );
}

export default GamesCarousel;


