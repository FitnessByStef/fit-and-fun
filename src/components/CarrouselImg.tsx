import { useState } from "react";

interface IProps{
    images:string[];
}
const CarrouselVidéos: React.FC<IProps> = (props : IProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

 return (
    <><div className="carousel">
         <button onClick={handlePrev} className="carousel-button">◀</button>
         <div className="carousel-image-container">
             <img src={props.images[currentIndex]} alt="Studio Gris" className="banner-image" />
         </div>
         <button onClick={handleNext} className="carousel-button">▶</button>
     </div><div className="carousel-dots">
             {props.images.map((_, index) => (
                 <span
                     key={index}
                     className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                     onClick={() => handleDotClick(index)}
                 ></span>
             ))}
         </div></>
);
};

export default CarrouselVidéos;