import React, { useEffect, useState } from "react";



const AnotherLayout = ({ children }) => {
    return (
        <>
            <div id="main_layout">

                <header>
                    <div class="top-header-strip hide-on-mbl bg-[#fecc4e] py-2.5 hidden md:block">
                        <div class="">
                            <div class="">
                                <div class="flex md:justify-evenly">
                                    <a href="javascript:void(0)" id="indexOfelement_0" class="active text-xs md:text-base"> PATIENTS </a>
                                    <a href="javascript:void(0)" id="indexOfelement_1" class="text-xs md:text-base"> DOCTORS </a>
                                    <a href="javascript:void(0)" id="indexOfelement_2" class="text-xs md:text-base"> BUSINESS PARTNERSHIP </a>
                                    <a href="javascript:void(0)" id="indexOfelement_3" class="text-xs md:text-base"> ABOUT US </a>
                                    <a href="javascript:void(0)" id="indexOfelement_4" class="text-xs md:text-base"> INVESTORS </a>
                                    <a href="javascript:void(0)" id="indexOfelement_5" class="text-xs md:text-base"> CONTACT US </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>


                <main>




                    {children}


                </main>



            </div>
        </>
    );
};

export default AnotherLayout;