import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const Special = () => {

    const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true


    };

    return (
        <>
            <section className=' bg-[#f1f1f1] pb-5 flex justify-center container' >

                <div className='w-[1350px] mt-[-80px] pt-4'>

                    <div className='bg-white py-5 mb-6 grid rounded-2xl h-[300px]' id='pop'>
                        <div className='radius-inner '>
                            <h2 className='pl-3  font-bold text-2xl'>Special Programs    </h2>

                        </div>

                        <div className='container' id='flow'>

                            <Slider {...settings}>

                            <div className="search-slider2 ng-star-inserted fade"   >
                                <div className="item text-center font-medium" >
                                    <a target="_blank" href=''>
                                        <div className="search-img">
                                        <img className="mx-auto d-block " src='https://uat-cdn.drlallab.com/2021-07/special-img1.png' />
                                            
                                        </div>
                                        <p>Diabetic Care Program</p>
                                    </a>
                                </div>

                            </div>
                            <div className="search-slider2 ng-star-inserted fade"  id='flow' >
                                <div className="item text-center font-medium " >
                                    <a target="_blank" href=''>
                                        <div className="search-img">
                                            <img className="mx-auto d-block " src='https://uat-cdn.drlallab.com/2021-07/special-img2.png' />
                                        </div>
                                        <p>SwasthFit</p>
                                    </a>
                                </div>

                            </div>
                            <div className="search-slider2 ng-star-inserted fade"  id='flow' >
                                <div className="item text-center font-medium" >
                                    <a target="_blank" href=''>
                                        <div className="search-img">
                                        <img className="mx-auto d-block " src='https://uat-cdn.drlallab.com/2021-07/special-img3.png' />
                                        </div>
                                        <p>Pregnancy Packages</p>
                                    </a>
                                </div>

                            </div>
                            <div className="search-slider2 ng-star-inserted fade"  id='flow' >
                                <div className="item text-center font-medium" >
                                    <a target="_blank" href=''>
                                        <div className="search-img">
                                            <img className="mx-auto d-block " src='https://uat-cdn.drlallab.com/2021-07/special-img4.png' />
                                        </div>
                                        <p>Allergy</p>
                                    </a>
                                </div>

                            </div>
                            <div className="search-slider2 ng-star-inserted fade"  id='flow' >
                                <div className="item text-center font-medium" >
                                    <a target="_blank" href=''>
                                        <div className="search-img">
                                            <img className="mx-auto d-block " src='https://uat-cdn.drlallab.com/2021-07/special-img5.png' />
                                        </div>
                                        <p>Oncopro</p>
                                    </a>
                                </div>

                            </div>

                            </Slider>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Special