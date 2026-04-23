'use client';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

function CarouselItem({ game }: { game: Game }) {
    return (
        <Carousel.Item interval={5000} style={{width: '100%', height: '50vh'}}>
            <Image src={game.cover_image} className="d-block w-100" alt="First slide" width={100} height={100} />
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