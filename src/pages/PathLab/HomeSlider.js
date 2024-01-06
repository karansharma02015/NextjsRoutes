'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const HomeSlider = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://admin-api.lalpathlabs.com/api/banner/getlists?pageSource=1')
            .then(res => res.json())
            .then(
                (result) => {
                    const All = result.Data;
                    setIsLoaded(true)
                    setItems(All);
                },
                (error) => {
                    setIsLoaded(true);
                    setError("there is no data", error);
                }
            )
    }, [setItems])

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

                    {
                        items.map((result) => (
                            <div className="">
                                <img crossorigin="anonymous" src={result.WebBanner} alt="banner" className='w-full' />

                            </div>
                        ))
                    }

                </Slider>

            </div>


        </>
    )
}

export default HomeSlider