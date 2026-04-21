import Container from '@mui/material/Container'
// import vid from '../videos/ImagineRIT_Vid_2025_NoCaption.mp4'


export default function Video() {
  return (

        <video width="100%" height="450px" controls>
            <source src='/src/videos/ImagineRIT_Vid_2025_NoCaption.mp4' type="video/mp4"/>
        </video>

  );
}