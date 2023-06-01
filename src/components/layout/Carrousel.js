import React from 'react';
import Slider from 'react-slick';
import '../../styles/components/layout/gallery.css';

const IMAGES = [
  {
    id: 1,
    src: 'images/imgcarrousel/foto1.jpg',
    alt: 'Example 1'
  },
  {
    id: 2,
    src: 'images/imgcarrousel/foto2.jpg',
    alt: 'Example 2'
  },
  {
    id: 3,
    src: 'images/imgcarrousel/foto3.png',
    alt: 'Example 3'
  },
  {
  id: 4,
    src: 'images/imgcarrousel/foto4.jpg',
    alt: 'Example 3'
  },
  {
    id: 5,
    src: 'images/imgcarrousel/foto5.jpg',
    alt: 'Example 3'
  }
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Slider {...settings}>
      {IMAGES.map(image => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} className='gallery-image'/>
        </div>
      ))}
    </Slider>
  );
};

export default Gallery;
