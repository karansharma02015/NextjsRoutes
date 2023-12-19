'use client'
import React from 'react'
import Slider from 'react-slick';

const HomeSlider = () => {

    const settings = {

        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: false

    };

    return (
        <>
            <div className='md:block hidden'>
                <Slider {...settings} >

                    <div className="">
                        <img crossorigin="anonymous" src="https://admin-api.lalpathlabs.com/api/s3/download-image?imageKey=apis/banner/9aa6128f-e009-49b2-8b45-832ecd319181.jpeg" alt="banner" className='w-full' />

                    </div>
                    <div className="">
                        <img crossorigin="anonymous" src="https://admin-api.lalpathlabs.com/api/s3/download-image?imageKey=apis/banner/c5e2eba1-bc59-4d97-8da2-dcbe6fcd1dd1.jpg" alt="banner" />

                    </div>
                    <div className="">
                        <img crossorigin="anonymous" src="https://admin-api.lalpathlabs.com/api/s3/download-image?imageKey=apis/banner/d4cff7ea-43e6-4b21-a62b-718c74b5e66d.png" alt="banner" />

                    </div>

                </Slider>

            </div>


        </>
    )
}

export default HomeSlider