import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarrouselVidéos, { IVideo } from './CarrouselVideos';

const HipHop_Videos: React.FC = () => {
  const videos : IVideo[] = [
    { id: 1, src: '/medias/videos/hiphop/HipHop.mp4', title: 'Hip Hop' },
  ];
  return <CarrouselVidéos videos={videos} title='Hip Hop'/>
};

export default HipHop_Videos;