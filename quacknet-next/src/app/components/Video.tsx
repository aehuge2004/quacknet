import Container from '@mui/material/Container'
// import vid from '/public/videos/ImagineRIT_Vid_2025_NoCaption.mp4'


export default function Video({videoSrc}: {videoSrc: string}) {
  return (

        <video width="100%" height="450px" controls>
            <source src={videoSrc} type="video/mp4"/>
        </video>

  );
}