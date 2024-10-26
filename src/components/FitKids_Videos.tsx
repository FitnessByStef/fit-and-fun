import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarrouselVidéos, { IVideo } from './CarrouselVideos';

const FitKids_Vidéos: React.FC = () => {
  const videos: IVideo[] = [
    { id: 1, src: '/medias/videos/fitkids/Fitkids_01.mp4', title: 'Video 1' },
    { id: 2, src: '/medias/videos/fitkids/Fitkids_02.mp4', title: 'Video 2' },
    { id: 3, src: '/medias/videos/fitkids/Fitkids_03.mp4', title: 'Video 3' },
  ];
  return <CarrouselVidéos videos={videos} title='🏋🏼‍♀️ FIT KIDS 🏋🏼‍♀️' />
};

export default FitKids_Vidéos;
