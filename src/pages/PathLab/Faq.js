import React, { useState } from 'react'

const Faq = () => {

    const [activeTab, setActiveTab] = useState('f1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>

            <section className=' bg-[#f1f1f1] pb-5 flex justify-center container' >

                <div className='w-[1350px] pt-4'>

                    <div className='bg-white py-5 mb-6 rounded-2xl'>
                        <div>
                            <h2 className='pl-3  font-bold text-2xl'>Frequently Asked Questions</h2>

                        </div>


                        <ul class="nav mt-6 ml-3 nav-tabs faq-tab">
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f1')} className={` cursor-pointer nav-link ${activeTab === 'f1' ? 'active show' : ''}`}>Labs and Centers</a>
                            </li>
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f2')} className={`cursor-pointer nav-link ${activeTab === 'f2' ? 'active show' : ''}`}>Reports</a>
                            </li>
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f3')} className={`cursor-pointer nav-link ${activeTab === 'f3' ? 'active show' : ''}`}>Test Booking</a>
                            </li>
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f4')} className={`cursor-pointer nav-link ${activeTab === 'f4' ? 'active show' : ''}`}>Wellness Packages</a>
                            </li>
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f5')} className={`cursor-pointer nav-link ${activeTab === 'f5' ? 'active show' : ''}`}>Patient Wallet</a>
                            </li>
                        </ul>

                        <section id="f1" className={`card-section w-[100%] test_faqs_section flex flex-col mb-14 ${activeTab === 'f1' ? 'active' : 'hidden'}`}>
                            <div className=''>
                                <div className=''>
                                    <div class="max-w-screen-xl px-5 bg-white min-h-sceen">

                                        <div class="grid  divide-neutral-200 mt-8">
                                            <div class=" border border-[#fdd366]">
                                                <details class="group  md:px-5 md:py-2 px-3 py-2 w-full rounded-[5px]">
                                                    <summary class="flex justify-start items-center font-medium cursor-pointer list-none">
                                                        <span class="transition group-open:rotate-180 ">
                                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                        <span className='pl-2'> What is the Swasth Super 4 package? </span>

                                                    </summary>
                                                    <p class="text-neutral-600 pl-8 mt-3 group-open:animate-fadeIn">
                                                        SAAS platform is a cloud-based software service that allows users to access
                                                        and use a variety of tools and functionality.
                                                    </p>
                                                </details>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section id="f2" className={`card-section w-[100%] test_faqs_section flex flex-col mb-14 ${activeTab === 'f2' ? 'active' : 'hidden'}`}>
                            <div className=''>
                                <div className=''>
                                    <div class="max-w-screen-xl px-5 bg-white min-h-sceen">

                                        <div class="grid  divide-neutral-200 mt-8">
                                            <div class=" border border-[#fdd366]">
                                                <details class="group  md:px-5 md:py-2 px-3 py-2 w-full rounded-[5px]">
                                                    <summary class="flex justify-start items-center font-medium cursor-pointer list-none">
                                                    <span class="transition group-open:rotate-180">
                                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                        <span className='pl-2'> What 4 package? </span>
                                                        
                                                    </summary>
                                                    <p class="text-neutral-600 pl-8 mt-3 group-open:animate-fadeIn">
                                                        SAAS platform is a cloud-based software service that allows users to access
                                                        and use a variety of tools and functionality.
                                                    </p>
                                                </details>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="f3" className={`card-section w-[100%] test_faqs_section flex flex-col mb-14 ${activeTab === 'f3' ? 'active' : 'hidden'}`}>
                            <div className=''>
                                <div className=''>
                                    <div class="max-w-screen-xl px-5 bg-white min-h-sceen">

                                        <div class="grid  divide-neutral-200 mt-8">
                                            <div class=" border border-[#fdd366]">
                                                <details class="group  md:px-5 md:py-2 px-3 py-2 w-full rounded-[5px]">
                                                    <summary class="flex justify-start items-center font-medium cursor-pointer list-none">
                                                    <span class="transition group-open:rotate-180">
                                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                        <span className='pl-2'> What is the different between 4 package? </span>
                                                        
                                                    </summary>
                                                    <p class="text-neutral-600 pl-8 mt-3 group-open:animate-fadeIn">
                                                        SAAS platform is a cloud-based software service that allows users to access
                                                        and use a variety of tools and functionality.
                                                    </p>
                                                </details>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="f5" className={`card-section w-[100%] test_faqs_section flex flex-col mb-14 ${activeTab === 'f5' ? 'active' : 'hidden'}`}>
                            <div className=''>
                                <div className=''>
                                    <div class="max-w-screen-xl px-5 bg-white min-h-sceen">

                                        <div class="grid  divide-neutral-200 mt-8">
                                            <div class=" border border-[#fdd366]">
                                                <details class="group  md:px-5 md:py-2 px-3 py-2 w-full rounded-[5px]">
                                                    <summary class="flex justify-start items-center font-medium cursor-pointer list-none">
                                                    <span class="transition group-open:rotate-180">
                                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                        <span className='pl-2'>Q. What are Swasth points?</span>
                                                        
                                                    </summary>
                                                    <p class="text-neutral-600 pl-8 mt-3 group-open:animate-fadeIn">
                                                        SAAS platform is a cloud-based software service that allows users to access
                                                        and use a variety of tools and functionality.
                                                    </p>
                                                </details>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="f4" className={`card-section w-[100%] test_faqs_section flex flex-col mb-14 ${activeTab === 'f4' ? 'active' : 'hidden'}`}>
                            <div className=''>
                                <div className=''>
                                    <div class="max-w-screen-xl px-5 bg-white min-h-sceen">

                                        <div class="grid  divide-neutral-200 mt-8">
                                            <div class=" border border-[#fdd366]">
                                                <details class="group  md:px-5 md:py-2 px-3 py-2 w-full rounded-[5px]">
                                                    <summary class="flex justify-start items-center font-medium cursor-pointer list-none">
                                                    <span class="transition group-open:rotate-180">
                                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                        <span className='pl-2'> Q. Linking report(s) not showing in My Reports section:</span>
                                                        
                                                    </summary>
                                                    <p class="text-neutral-600 pl-8 mt-3 group-open:animate-fadeIn">
                                                        SAAS platform is a cloud-based software service that allows users to access
                                                        and use a variety of tools and functionality.
                                                    </p>
                                                </details>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Faq