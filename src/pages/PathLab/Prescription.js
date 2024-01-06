import Link from 'next/link'
import React from 'react'

const Prescription = () => {

    
    
    return (
        <>

            <section class="blue-top-section bg-[#0047af] md:h-[250px] h-[230px]">
                <div class="container">
                    <div class="grid grid-cols-4 blue-top-inner px-2 py-4 w-full md:w-[65%] mx-auto">
                        <div class="top-circle my-5 border-l border-r">
                            <a >
                                <div class="top-circle-img mb-3">
                                    <img class="mx-auto d-block w-16 " src="https://uat-cdn.drlallab.com/2021-08/Webp.net-resizeimage%20%282%29.png" alt="Nearest Centre Icon" />
                                </div>
                                <p className='text-center  text-white text-sm md:text-lg'>Nearest Centre</p>
                            </a>
                        </div>
                        <div class="top-circle my-5 border-r">
                            <a >
                                <div class="top-circle-img mb-3">
                                    <img class="mx-auto d-block w-16" src="https://uat-cdn.drlallab.com/2021-07/blue-bg-icon2.png" alt="Book a Test Icon" />
                                </div>
                                <p className='text-center  text-white text-sm md:text-lg'>Book a Test</p>
                            </a>
                        </div>
                        <div class="top-circle my-5 border-r">
                            <Link href='/Upload/Upload'>
                                <div class="top-circle-img mb-3">
                                    <img class="mx-auto d-block w-16" src="https://uat-cdn.drlallab.com/2021-08/Webp.net-resizeimage%20%283%29.png" alt="Upload Prescription Icon" />
                                </div>
                                <p className='text-center  text-white text-sm md:text-lg'>Upload Prescription</p>
                            </Link>
                        </div>
                        <div class="top-circle my-5 border-r">
                            <a >
                                <div class="top-circle-img mb-3">
                                    <img class="mx-auto d-block w-16" src="https://uat-cdn.drlallab.com/2021-07/blue-bg-icon4_0.png" alt="Download Report Icon" />
                                </div>
                                <p className='text-center  text-white text-sm md:text-lg'>Download Report</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Prescription