'use client';
import Carousel from 'react-bootstrap/Carousel';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import { Game } from '@/types/games';

function CarouselItem({ game }: { game: Game }) {
    const src = `data:image/png;base64,${game.cover_image.toString()}`;
    return (
        <Carousel.Item interval={2000} style={{width: '100%', height: '50vh'}}>
            <Image src={src} className="d-block w-100" alt="First slide" width={100} height={100} />
            <Carousel.Caption style={{ justifyContent: 'flex-start', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px' }}>
                <h3>{game.title}</h3>
                <p style={{ fontSize: '14px' }}>
                    {game.summary}
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default CarouselItem;