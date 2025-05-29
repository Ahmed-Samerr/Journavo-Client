import React from 'react'
import style from "./CarouselOfMain.module.css"
import slide1 from "../../assets/tem.jpg"
import slide2 from "../../assets/chaz.jpg"
import slide3 from "../../assets/photoofpharans.jpg"
import slide4 from "../../assets/photoofpyramids.jpg"
import slide5 from "../../assets/photoofsea.jpg"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function CarouselOfMain() {
    
 const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
  return <>
  
  <div className='row my-4'>

<div className='w-2/4 flex-auto '>
<Slider  {...sliderSettings}>
<img src={slide3} className='w-full h-[400px] object-cover' alt='' />
<img src={slide4} className='w-full h-[400px] object-cover' alt='' />
<img src={slide5} className='w-full h-[400px] object-cover' alt='' />


 </Slider> 
</div>




  </div>
  
 




      
  
  
  </>
}
