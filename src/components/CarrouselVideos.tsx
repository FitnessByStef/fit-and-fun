import Slider from "react-slick";
export interface IVideo{
        id: number;
        src: string;
        title: string;
}
interface IProps {
    videos : IVideo[];
    title : string;
}

const CarrouselVidéos: React.FC<IProps> = (props : IProps) => {
    
    const settings = {
        dots: true,
        infinite: props.videos.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    console.log("videos",props.videos);
    return (
        <div className="fitandfunform">
        <h2 className="fitandfunformheader">{props.title}</h2>
        <section className="homepage-features-videos">
            <div className="feature-card" id="coach">
            <Slider {...settings}>
                
                {props.videos.map((video) => (
                <div key={video.id} className="video-container">
                    <video className="responsive-video" controls preload="auto">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                ))}
            </Slider>

            <style>{`
                /* Centrage de l'ensemble du conteneur vidéo */
                .centered-content {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh; /* Centre verticalement en occupant toute la hauteur de la page */
                flex-direction: column;
                }

                /* Conteneur de la vidéo */
                .video-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                }

                /* Vidéo responsive */
                .responsive-video {
                width: 100%;
                height: auto;
                max-height: 450px;
                border-radius: 8px;
                }

                /* Styles pour les points de navigation */
                .slick-dots li button:before {
                color: #ff007f;
                }

                .slick-dots li.slick-active button:before {
                opacity: 1;
                color: #ff007f;
                }
            `}</style>
            </div>
        </section>
        </div>
    );
};

export default CarrouselVidéos;