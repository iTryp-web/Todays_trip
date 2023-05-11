import React from 'react'
import { SliderImg, SliderBlock } from '../../styles/HomeStyle'
import { HomeImages } from './homeData'
import { useNavigate } from 'react-router-dom'

const ImageSlider = () => {
  const navigate = useNavigate()
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
            <SliderImg key={item.id} src={item.src} onClick={() => navigate(item.url)} />
          ))}
      </SliderBlock>
    </>
  )
}

export default ImageSlider