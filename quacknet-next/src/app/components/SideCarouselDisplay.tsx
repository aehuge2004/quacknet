'use client';
import { Game } from '@/types/games';
import Image from 'next/image';

function SideCarouselDisplay({game, index }: {game: Game, index: number }) {
  return (
    <img src={game.cover_image} alt="" width={100} height={100} style={{width: '100%', height: '15vh'}}></img>
  );
}

export default SideCarouselDisplay;