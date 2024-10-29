import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarrouselVidéos, { IVideo } from './CarrouselVideos';

const Twerk_Videos: React.FC = () => {
  const videos : IVideo[] = [
    { id: 1, src: '/medias/videos/twerk/Twerk.mp4', title: 'Twerk' },
  ];
  return <CarrouselVidéos videos={videos} title='TWERK'/>
};

export default Twerk_Videos;