'use client';
import Image from 'next/image';

function SideCarouselDisplay({imageSrc}: {imageSrc: string}) {
  const src = `data:image/png;base64,${imageSrc.toString('base64')}`;
  return (
    <Image src={src} alt="" width={100} height={100} style={{width: '100%', height: '15vh'}}></Image>
  );
}

export default SideCarouselDisplay;