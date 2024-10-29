import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarrouselVidéos, { IVideo } from './CarrouselVideos';

const CardioBoxing_Videos: React.FC = () => {
  const videos : IVideo[] = [
    { id: 1, src: '/medias/videos/cardioboxing/Cardioboxing2.mp4', title: 'Cardio Boxing' },
    { id: 2, src: '/medias/videos/cardioboxing/Cardioboxing.mp4', title: 'Cardio Boxing' },
  ];
  return <CarrouselVidéos videos={videos} title=' CARDIO BOXING ' />
};

export default CardioBoxing_Videos;