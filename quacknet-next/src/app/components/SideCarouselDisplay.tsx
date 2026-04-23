'use client';
import Image from 'next/image';

function SideCarouselDisplay({imageSrc}: {imageSrc: string}) {
  return (
    <Image src={imageSrc} alt="" width={100} height={100} style={{width: '100%', height: '15vh'}}></Image>
  );
}

export default SideCarouselDisplay;