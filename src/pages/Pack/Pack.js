import Layout from '@/Layout/layout'
import Link from 'next/link';
import { Result } from 'postcss';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';


const Pack = ({ itemsPerPage }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [itemOffset, setItemOffSet] = useState(0);


    const endOffset = itemOffset + 24;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 24);

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);


    const handlePageClick = (e) => {
        const newOffset = (e.selected * 24) % items.length;
        console.log(`url requested page number ${e.selected}, which is offset ${newOffset}`)
        setItemOffSet(newOffset);
    }


    const categoryChange = (index) => {
        console.log('hel')
        if (index < 2) {
            setSelectedCategoryIndex(index);
            setItemOffSet(0);  
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


    useEffect(() => {
        fetch('https://liveapi.lalpathlabs.com/api/UI/GetJsonByPage?x-api-version=1&SiteId=1&PageUrl=test-menu-pat')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.Data.body.section[0].item[selectedCategoryIndex].subitem);
                    setSelectedItems(result.Data.body.section[0].item);

                    console.log(items);
                    console.log(result.Data.body.section[0].item);

                },
                (error) => {
                    setIsLoaded(true);
                    setError("there is no data", error);
                }
            )
    }, [selectedCategoryIndex,itemOffset])

    if (error) {
        return <div> Error :  {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        return (
            <>
                <section className="serach-section test-menu">
                    <div class="banner-bredcrum">
                        <div class="container">
                            <ul>
                                <li class="arrow">
                                    <Link href="/PathLab/PathLab">Home </Link>
                                </li>
                                <li class="active">
                                    <a href="javascript:void(0)">Test Menu</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-20 mt-6">
                        <div className="row radius-inner px-5">
                            <div className='grid-cols-1'>
                                <h3>Search Test and Packages</h3>
                            </div>

                            <div className="grid grid-flow-col items-center">
                                <div className="col-span-9 full-ul">
                                    <ul className="nav nav-tabs faq-tab">


                                        {
                                            selectedItems.map((category, index) => (
                                                <li className="nav-item ng-star-inserted" key={index}>
                                                    <button data-toggle="tab" href="#s1" className="nav-link ng-star-inserted" onClick={() => categoryChange(index)}>{category.label}</button>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                                <div className="col-span-3 right-search right-aligns">
                                    <div className="nav-item srch-input-2">
                                        <input type="search" placeholder="Search Test" className="ng-untouched ng-pristine ng-valid" onChange={(e) => searchItems(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div classNameName='tab-content'>
                                        <div className="tab-pane active ng-star-inserted">
                                            <Pagination currentItems={currentItems} searchInput={searchInput} filteredResults={filteredResults} items={items} />
                                            <ReactPaginate
                                                breakLabel="..."
                                                nextLabel="next >"
                                                onPageChange={handlePageClick}
                                                pageRangeDisplayed={5}
                                                pageCount={pageCount}
                                                previousLabel="< prev"
                                                renderOnZeroPageCount={null}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

function Pagination({ currentItems, searchInput, items, filteredResults }) {

    
    return (
        <>

            <div className='grid grid-cols-6'>
                {searchInput.length > 1 ? (

                    filteredResults.map((item) => (

                        <div className="search-slider2 ng-star-inserted fade" key={item.orderby}>
                            <div className="item" >
                                <a target="_blank" href="/test-for-abortions">
                                    <div className="search-img">
                                        <img className="mx-auto d-block " src={item.img} />
                                    </div>
                                    <p>{item.label}</p>
                                </a>
                            </div>

                        </div>
                    ))
                ) :
                    (currentItems.map((item) => (

                        <div className="search-slider2 ng-star-inserted" key={item.orderby}>
                            <div className="item" >
                                <a target="_blank" href="/test-for-abortions">
                                    <div className="search-img">
                                        <img className="mx-auto d-block" src={item.img} />
                                    </div>
                                    <p>{item.label}</p>
                                </a>
                            </div>

                        </div>
                    )))

                }
            </div>

        </>
    )
}

Pack.getLayout = function getLayout(page) {
    return (

        <Layout>{page}</Layout>
    )
}

export default Pack