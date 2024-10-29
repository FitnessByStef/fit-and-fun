import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarrouselVidéos, { IVideo } from './CarrouselVideos';

const Heels_Videos: React.FC = () => {
  const videos : IVideo[] = [
    { id: 1, src: '/medias/videos/heels/Heels.mp4', title: 'Heels' },
  ];
  return <CarrouselVidéos videos={videos} title='Heels'/>
};

export default Heels_Videos;