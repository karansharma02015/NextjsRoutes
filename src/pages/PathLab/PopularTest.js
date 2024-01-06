'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const PopularTest = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://admin-api.lalpathlabs.com/api/test/GetAllTestByCategoryName?x-api-version=1&Page=1&Size=1&CityName=Delhi&Itemid=WDM46,A001,B001,B080,WDM47,WDM78,WM64')
            .then(res => res.json())
            .then(
                (result) => {
                    const All = result.Data.data.result;
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
        


    };

    return (
        <>

            <section className=' bg-[#f1f1f1] flex justify-center container' >

                <div className='w-[1350px]'>

                    <div className='bg-white mb-6 grid rounded-2xl h-[400px]'>
                        <div>
                            <h2 className='pl-3 pt-4 font-bold text-2xl'>Popular Test / Packages    </h2>

                        </div>

                        <div className='container' id='pop'>

                            <Slider {...settings}>

                                {
                                    items.map((item) => (

                                        <div class="ng-tns-c11-8  " >

                                            <div class="popular-inner pos_rel list-gap-lt" >
                                                <h4 >{item.item_name}</h4>
                                                <div id="sidescrollr" class="scrollbar">
                                                    <ul >
                                                        <li class="text-truncate">

                                                            <span class="info-icon">

                                                                <img alt="" loading="lazy" src="https://www.lalpathlabs.com/assets/images/info-icon.png" />

                                                            </span> {item.pretest_info}</li>

                                                        <li class="text-truncate">
                                                            <span class="report-icon">

                                                                <img alt="" loading="lazy" src="https://www.lalpathlabs.com/assets/images/report-icon.png" /></span> {item.report_delivery}</li>

                                                        <li class="text-truncate"><span class="para-icon">

                                                            <img alt="" loading="lazy" src="https://uat-cdn.drlallab.com/2023-02/parameters-covered.png" />

                                                        </span> 1 parameter(s) covered </li>
                                                    </ul>
                                                </div>

                                                <div class="read-more-d"><a href={item.test_details_url} target="_blank">know more</a>

                                                </div>

                                                <div class="add-to-cart pos_rel">
                                                    <div class="popularprice pricee-div">

                                                        <span >₹</span>{item.price} </div>

                                                    <div class="cartt-div">

                                                        <a href={item.add_to_cart_url} target="_blank">Book Now</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }


                            </Slider>
                        </div>


                                
                        <div class="view-right mng-view-all pr-4">
                            <Link href='/' class="view-all" >View All</Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default PopularTest