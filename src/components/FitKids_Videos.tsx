import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Assurez-vous que ces styles sont importés

const FitKids_Vidéos: React.FC = () => {
  const videos = [
    { id: 1, src: '/medias/videos/fitkids/FITKIDS_01.mp4', title: 'Video 1' },
    { id: 2, src: '/medias/videos/fitkids/FITKIDS_02.mp4', title: 'Video 2' },
    { id: 3, src: '/medias/videos/fitkids/FITKIDS_03.mp4', title: 'Video 3' },
  ];

  const settings = {
    dots: true, // Affiche des points sous le carrousel
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Affiche une seule vidéo à la fois
    slidesToScroll: 1, // Défile une vidéo à la fois
    arrows: false, // Masque les flèches, car tu veux utiliser les points
  };

  return (
    <div className="fitandfunform">
      <h2 className="fitandfunformheader">🏋🏼‍♀️ FIT AND FUN 🏋🏼‍♀️</h2>

      {/* Section des vidéos */}
      <section className="homepage-features">
        <div className="feature-card" id="coach">
          <Slider {...settings}>
            {videos.map((video) => (
              <div key={video.id} className="video-container">
                <video width="100%" height="auto" controls preload="auto">
                  <source src={video.src} type="video/mp4" /> {/* Ajusté pour MOV */}
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>

          <style>{`
            .video-container {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .slick-dots li button:before {
              color: #ff007f; /* Couleur des points */
            }

            .slick-dots li.slick-active button:before {
              opacity: 1;
              color: #ff007f; /* Couleur du point actif */
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default FitKids_Vidéos;
