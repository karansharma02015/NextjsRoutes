import Layout from '@/Layout/layout'
import Link from 'next/link';
import { Result } from 'postcss';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const Test = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [label, setLabel] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);



    const categoryChange = (index) => {
        console.log('hel')
        setActiveIndex(index);
        if (index < 2) {
            setSelectedCategoryIndex(index);

        }
    }


    const searchItems = (searchValue) => {

        setSearchInput(searchValue);

        if (searchValue !== '') {
            const filterData = selectedItems[selectedCategoryIndex].subitem.filter((item) => {
                return item.label.toLowerCase().includes(searchValue.toLowerCase());
            })
            setFilteredResults(filterData);
        }
        else {
            setFilteredResults(items.subitem);
        }

    }
    const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true


    };

    useEffect(() => {
        fetch('https://liveapi.lalpathlabs.com/api/UI/GetJsonByPage?x-api-version=1&SiteId=1&PageUrl=test-menu-pat')
            .then(res => res.json())
            .then(
                (result) => {

                    setIsLoaded(true);
                    setItems(result.Data.body.section[0].item[selectedCategoryIndex].subitem);
                    setLabel(result.Data.body.section)
                    setSelectedItems(result.Data.body.section[0].item);

                    console.log(items);
                    console.log(result.Data.body.section[0].item);

                },
                (error) => {
                    setIsLoaded(true);
                    setError("there is no data", error);
                }
            )
    }, [selectedCategoryIndex])

    if (error) {
        return <div> Error :  {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        return (
            <>
                <section className=' bg-[#f1f1f1] flex justify-center container '>
                    <div className="mx-20 w-[1350px]">
                        <div className="row radius-inner px-5 h-[320px]">
                            <div className='font-bold text-2xl'>
                                {
                                    label.map((result) => (
                                        <h3>{result.labels}</h3>
                                    ))
                                }
                            </div>
                            
                            <div className="grid grid-flow-col items-center">
                                <div className="col-span-9 full-ul">
                                    <ul className="nav nav-tabs faq-tab">


                                        {
                                            selectedItems.map((category, index) => (
                                                <li className="nav-item  ng-star-inserted" key={index}>
                                                    <button data-toggle="tab" href="#s1" className={`nav-link ${index === activeIndex ? 'active ng-star-inserted' : ''}`} onClick={() => categoryChange(index)}>{category.label}</button>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                               
                            </div>

                            <div className=''>
                                <div>
                                    <div classNameName='tab-content'>
                                        <div className="tab-pane active ng-star-inserted" id='pac'>
                                            <div className=''>
                                                <Slider {...settings}>
                                                    {searchInput.length > 1 ? (

                                                        filteredResults.map((item) => (

                                                            <div className="search-slider2 ng-star-inserted fade" key={item.orderby} id='flow' >
                                                                <div className="item" >
                                                                    <a target="_blank" href={item.url}>
                                                                        <div className="search-img flex justify-center">
                                                                            <img className="mx-auto d-block " src={item.img} />
                                                                        </div>
                                                                        <p>{item.label}</p>
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        ))
                                                    ) :
                                                        (items.map((item) => (

                                                            <div className="search-slider2 ng-star-inserted" key={item.orderby}>
                                                                <div className="item" >
                                                                    <a target="_blank" href={item.url}>
                                                                        <div className="search-img">
                                                                            <img className="mx-auto d-block" src={item.img} />
                                                                        </div>
                                                                        <p className='text-center'>{item.label}</p>
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        )))

                                                    }
                                                </Slider>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="view-right mng-view-all">
                                <Link href='/Pack/Pack' class="view-all" >View All</Link>
                            </div>
                        </div>
                    </div>

                </section>

            </>
        )
    }
}

export default Test