import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarrouselVidéos, { IVideo } from './CarrouselVideos';

const DanseUrbaine_Videos: React.FC = () => {
  const videos : IVideo[] = [
    { id: 1, src: '/medias/videos/danseurbaine/DanseUrbaine.mp4', title: 'Danse Urbaine' },
  ];
  return <CarrouselVidéos videos={videos} title='Danse Urbaine'/>
};

export default DanseUrbaine_Videos;