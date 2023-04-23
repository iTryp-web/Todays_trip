import React from 'react'
import { ImageBlock, SliderBlock } from '../../styles/HomeStyle'
import { HomeImages } from './homeData'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <SliderBlock {...settings}>
        {HomeImages &&
          HomeImages.map((item) => (
            <ImageBlock key={item.id} src={item.src} />
          ))}
      </SliderBlock>
    </>
  )
}

export default ImageSlider