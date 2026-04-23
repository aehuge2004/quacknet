'use client';
import Container from '@mui/material/Container'



export default function Video({videoSrc}: {videoSrc: string}) {
  return (
        <video width="100%" height="450px" controls>
            <source src={videoSrc} type="video/mp4"/>
        </video>

  );
}