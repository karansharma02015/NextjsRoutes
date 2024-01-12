import Layout from '@/Layout/layout'
import React, { useState } from 'react'


const InvestorInside = () => {

    const [activeTab, setActiveTab] = useState('f1');


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>

            <section className=' bg-[#f1f1f1] pb-5 flex justify-center container' >

                <div className='w-[1350px] pt-4'>

                    <div className='bg-white py-5 mb-6 rounded-2xl'>



                        <ul class="nav mt-6 ml-3 nav-tabs faq-tab">
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f1')} className={` cursor-pointer nav-link ${activeTab === 'f1' ? 'active show' : ''}`}>Financials</a>
                            </li>
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f2')} className={`cursor-pointer nav-link ${activeTab === 'f2' ? 'active show' : ''}`}>Investor Information</a>
                            </li>
                            <li class="nav-item ng-star-inserted">
                                <a data-toggle="tab" onClick={() => handleTabClick('f3')} className={`cursor-pointer nav-link ${activeTab === 'f3' ? 'active show' : ''}`}>Corportate Information</a>
                            </li>

                        </ul>

                        <div class="text-center mt-8">
                            <strong>Disclosures under Regulation 46 of the SEBI (LODR) Regulations, 2015</strong>
                        </div>

                        
                    </div>


                </div>
            </section>


        </>
    )
}

InvestorInside.getLayout = function getLayout(page) {
    return (

        <Layout>{page}</Layout>
    )

}

export default InvestorInside