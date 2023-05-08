import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";

const SliderBlock = styled(Slider)`
  text-align: center;
  overflow-x: hidden;
  .slick-dots {
    position: absolute;
    bottom: 2rem;
    @media only screen and (max-width: 1024px) {
      bottom: 1rem;
    }
  }
  .slick-dots li button:before {
    color: var(-gray);
  }
`;


const PowerSlider = () => {
  const navigate=useNavigate();
  const [width, setWidth] = useState(window.innerWidth < 768 ? true : false);
  const [images, setImages] = useState(null);
  
  useEffect(() => {
    const getData = async () => {
      const {
        data: { banners },
      } = await axios.get("/api/getItemApi");
      setImages(banners);
    };
    getData();
  }, []);

  const screenChange = (e) => {
    const matches = e.matches;
    setWidth(matches);
  };

  useEffect(() => {
    const mql = window.matchMedia("screen and (max-width:768px)");
    mql.addEventListener("change", screenChange);
    return () => mql.removeEventListener("change", screenChange);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const imageURL=[
    "https://d2ur7st6jjikze.cloudfront.net/cms/1836_original_1681562977.jpg?1681562977",
    "https://d2ur7st6jjikze.cloudfront.net/cms/1680_original_1678940770.jpg?1678940770",
    "https://d2ur7st6jjikze.cloudfront.net/cms/3624_original_1678357942.jpg?1678357942",
    "https://d2ur7st6jjikze.cloudfront.net/cms/1784_original_1677772299.jpg?1677772299",
    "https://d2ur7st6jjikze.cloudfront.net/cms/1406_original_1672796353.jpg?1672796353"
  ]
  
  

  return (
    <div>
        <SliderBlock {...settings}>
       
            {/* {imageURL.map((image)=>(
             <img src={image}/>
          ))} */}
           <img onClick={()=>{navigate("/market/detail/1683513734309")}} src={"https://d2ur7st6jjikze.cloudfront.net/cms/1836_original_1681562977.jpg?1681562977"}/>
           <img onClick={()=>{navigate("/market/detail/1683516284967")}} src={"https://d2ur7st6jjikze.cloudfront.net/cms/1680_original_1678940770.jpg?1678940770"}/>
           <img onClick={()=>{navigate("/market/detail/1683511255237")}} src={"https://d2ur7st6jjikze.cloudfront.net/cms/3624_original_1678357942.jpg?1678357942"}/>
           <img onClick={()=>{navigate("/market/detail/1683516050860")}} src={"https://d2ur7st6jjikze.cloudfront.net/cms/1784_original_1677772299.jpg?1677772299"}/>
           <img onClick={()=>{navigate("/market/detail/1683514396527")}} src={"https://d2ur7st6jjikze.cloudfront.net/cms/1406_original_1672796353.jpg?1672796353"}/>

        </SliderBlock>
    
    </div>
  );
};

export default PowerSlider;
