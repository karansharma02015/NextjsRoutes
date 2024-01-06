'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const Promotion = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://admin-api.lalpathlabs.com/api/coupon/getlists')
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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true


    };
    return (
        <section className=' bg-[#f1f1f1] pb-5 flex justify-center container' >

            <div className='w-[1350px] pt-4'>

                <div className='bg-white py-5 mb-6 grid rounded-2xl h-[400px]'>
                    <div>
                        <h2 className='pl-3  font-bold text-2xl'>Popular Test / Packages    </h2>

                    </div>

                    <div className='container' id='pop'>


                        <Slider {...settings}>
                            {
                                items.map((result) => (
                                    <div class="promotions-slider-details details-new-promotions ng-star-inserted" style="">
                                        <img crossorigin="anonymous" loading="lazy" alt="swasthfit referral offers" src={result.Banner} />
                                        <div class="new-promotion-div">
                                            <div class="promotion-coupon-code">{result.Name}</div>
                                        </div>
                                    </div>
                                ))
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion