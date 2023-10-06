"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className='bg-light mt-[125px] py-36'>
        <div className='container'>
            <div className='text-center'>
            <h2>Our Testimonial</h2>
            <p>We believe scaling startups require a radically different kind of agency</p>
            </div>
            <div>
            <Slider {...settings}>

            <div className=''>
              <div className='testimonial__box'>

              <div className='client__img h-[150px] w-[150px] mr-3'>
                <img src="/images/client_avtar.svg" alt="" className='' />
              </div>

              <div className='client_text'>
                <div className='border-b border-[#F0F0F0] pb-4'>
                <p className='text-[#696969]'>The experts easily identified the wand guided us through the creation of the c.</p>
                
                <div className='flex items-center mt-2'>
                <p className='text-[#39364E] font-[500]'>I love Sway </p>
                <img src="/images/smiley.png" alt="smiley" className='h-[16px] w-[16px] ml-2' />
                </div>
                
                </div>
                <div className='pt-2'><p className='text-[#7854F7] font-[700]'>Vincent Smith <span className='text-[#ACACAC] font-[400] ml-2'>CEO at Ritmo</span> </p></div>

              </div>
            </div>
           </div>


           <div className=''>
              <div className='testimonial__box'>

              <div className='client__img h-[150px] w-[150px] mr-3'>
                <img src="/images/client_avtar.svg" alt="" className='' />
              </div>

              <div className='client_text'>
                <div className='border-b border-[#F0F0F0] pb-4'>
                <p className='text-[#696969]'>The experts easily identified the wand guided us through the creation of the c.</p>
                
                <div className='flex items-center mt-2'>
                <p className='text-[#39364E] font-[500]'>I love Sway </p>
                <img src="/images/smiley.png" alt="smiley" className='h-[16px] w-[16px] ml-2' />
                </div>
                
                </div>
                <div className='pt-2'><p className='text-[#7854F7] font-[700]'>Vincent Smith <span className='text-[#ACACAC] font-[400] ml-2'>CEO at Ritmo</span> </p></div>

              </div>
            </div>
           </div>


           <div className=''>
              <div className='testimonial__box'>

              <div className='client__img h-[150px] w-[150px] mr-3'>
                <img src="/images/client_avtar.svg" alt="" className='' />
              </div>

              <div className='client_text'>
                <div className='border-b border-[#F0F0F0] pb-4'>
                <p className='text-[#696969]'>The experts easily identified the wand guided us through the creation of the c.</p>
                
                <div className='flex items-center mt-2'>
                <p className='text-[#39364E] font-[500]'>I love Sway </p>
                <img src="/images/smiley.png" alt="smiley" className='h-[16px] w-[16px] ml-2' />
                </div>
                
                </div>
                <div className='pt-2'><p className='text-[#7854F7] font-[700]'>Vincent Smith <span className='text-[#ACACAC] font-[400] ml-2'>CEO at Ritmo</span> </p></div>

              </div>
            </div>
           </div>


           <div className=''>
              <div className='testimonial__box'>

              <div className='client__img h-[150px] w-[150px] mr-3'>
                <img src="/images/client_avtar.svg" alt="" className='' />
              </div>

              <div className='client_text'>
                <div className='border-b border-[#F0F0F0] pb-4'>
                <p className='text-[#696969]'>The experts easily identified the wand guided us through the creation of the c.</p>
                
                <div className='flex items-center mt-2'>
                <p className='text-[#39364E] font-[500]'>I love Sway </p>
                <img src="/images/smiley.png" alt="smiley" className='h-[16px] w-[16px] ml-2' />
                </div>
                
                </div>
                <div className='pt-2'><p className='text-[#7854F7] font-[700]'>Vincent Smith <span className='text-[#ACACAC] font-[400] ml-2'>CEO at Ritmo</span> </p></div>

              </div>
            </div>
           </div>


         </Slider>
            </div>
        </div>
    </div>
  )
}
