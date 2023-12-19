import React from 'react'

import Link from 'next/link';
import Layout from '@/Layout/layout';
import NestedLayout from '@/Layout/NestedLayout';


const Book = () => {
    return (
        <>

            
            <section className="main-section flex w-[100%] items-center justify-center md:justify-between px-2 md:px-5">
                <div className="main-container flex md:flex-row flex-col justify-center w-[100%] h-auto relative">
                    <div className="banner banner2 w-[100%] md:w-[73%] md:mx-3">
                        <img src="https://media.lalpathlabs.com/images/lead-page/banner1.jpg" alt="banner" className="banner-image w-[100%] hidden md:block rounded-2xl h-[425px]" />
                        <img src="https://media.lalpathlabs.com/images/lead-page/mobilebanner1.jpg" alt="" className="mobilebanner w-full mobilebanner1 block md:hidden" />
                    </div>

                    <div className="leadform-box m-auto bg-[#f4faff] mt-3 md:mt-0 items-center flex flex-col w-[80%] md:w-[23%] h-[425px] justify-center rounded-2xl">

                        <h2 className="form-title color-[#0054a5] uppercase text-center mt-1">Book Your Test</h2>
                        <form action="#" className="form-box py-1 px-2 mt-2 mx-1 relative flex flex-col justify-center content-center">
                            <div className="form-element">
                                <input name="PatientName" type="text" id="PatientName" placeholder="Name" className="form-input w-full h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md" />
                                <div className="invalid-feedback invisible">
                                    <div > Please enter name
                                    </div>
                                </div>
                            </div>
                            <div className="form-element">
                                <input name="PhoneNumber" type="text" id="PhoneNumber" placeholder="Mobile Number" className="form-input w-full h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md" />
                                <div className="invalid-feedback invisible">
                                    <div> Please enter mobile number. </div>
                                </div>
                            </div>
                            <div className="form-element">
                                <select name="City" id="city" className="form-input w-full h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md">
                                    <option value="">Select City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Gurgaon">Gurgaon</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Greater Noida">Greater Noida</option>
                                    <option value="Faridabad">Faridabad</option>
                                    <option value="Ghaziabad">Ghaziabad</option>
                                </select>
                                <div className="invalid-feedback invisible">
                                    <div > Please select city. </div>
                                </div>
                            </div>
                            <div className="form-element whatsapp-box flex flex-row w-full items-center mb-2">
                                <input type="checkbox" name="whatsapp" value="whatsapp agree" className='ml-1 mr-2 cursor-pointer h-4 w-4' />
                                <label className='text-sm'>
                                    <i className="fa fa-whatsapp"></i>Opt-In for Whatsapp Updates</label>
                            </div>
                            <div className="form-element condition-box ">
                                <input type="checkbox" name="condition" value="agree" className='ml-1 mr-2 mt-1 cursor-pointer h-4 w-4' />
                                <label className='text-sm'>I authorize Dr Lal PathLabs to contact me regarding Test details. <a href="https://www.lalpathlabs.com/term-of-use.aspx">T&amp;C*</a>
                                </label>
                            </div>
                            <div className="form_button flex flex-col w-100 mt-3 mb-0">
                                <button className="booknow-btn bg-[#0054a5] h-9 text-white flex justify-center p-3 rounded-md items-center opacity-80">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="packagesection">
                <div className="package">
                    <div className="packagedetail">
                    </div>
                    <div className="packageimage">
                        <img src="" alt="" />
                    </div>
                </div>
            </section>

            <section className="card-section mt-3 test_details_overview md:mx-40 ml-5 mr-5 mb-5 rounded-lg bg-[#e9f3ff] md:bg-white">
                <div className="card-container p-3">
                    <div className="text-left w-100 book_test_heading">
                        <strong >TEST DETAILS</strong>
                    </div>
                    <div className="book_test_details mt-3 text-sm md:text-base">

                        <p>HbA1c also called Glycated hemoglobin gives the average sugar level in the body over a period of 2 to 3 months unlike blood sugar which indicates daily level. This test is used to diagnose prediabetes, diagnose type 1 and type 2 diabetes &amp; monitor your diabetes treatment plan. Initial A1C test also helps to establish your baseline level. How often you need this test depends on the type of diabetes, your treatment plan, how well you are meeting treatment goals and your doctor's clinical judgment. The recommended protocol for this test is: Once every year if you have prediabetes; Twice a year if you do not use insulin and your blood sugar level is consistently within your target range; Four times a year if you take insulin or have trouble keeping your blood sugar level within your target range</p>

                    </div>
                </div>
            </section>

            <section className="card-section w-full flex justify-center flex-col items-center">
                <div className="container card-container p-3">
                    <div className="card-div w-auto flex flex-col items-center justify-center">
                        <h2 className='text-[#0559ab] text-2xl m-4 p-3 font-semibold'>Why Dr Lal PathLabs ?</h2>
                        <hr className="divider w-[70%] h-1 rounded-sm outline-none opacity-80 mt-3" />
                        <div className="cards grid grid-cols-1 gap-0 m-5 p-5 md:grid-cols-4 md:gap-5 ">
                            <div className="card-items">
                                <div className="icons h-[250px] w-[230px] shadow-[0px_1px_4px_rgba(0,0,0,.16)] rounded-md m-3 p-3 flex justify-center items-center flex-col">
                                    <div id="Trusticon" className="icon-img p-5">
                                        <img src="https://media.lalpathlabs.com/images/lead-page/Trust-icon.png" alt="Trust-icon" className='w-[125px] h-[100px]' />
                                    </div>
                                    <div id="trust-title" className="icon-title  text-center text-[#5f5f5f] pb-6">
                                        <h3 >70 years of Trust </h3>
                                    </div>
                                </div>

                            </div>

                            <div className='card-items'>
                                <div className="icons h-[250px] w-[230px] shadow-[0px_1px_4px_rgba(0,0,0,.16)] rounded-md m-3 p-3 flex justify-center items-center flex-col">
                                    <div className="icon-img p-5 ">
                                        <img src="https://media.lalpathlabs.com/images/lead-page/Customers.png" alt="Trust-icon" className='w-[125px] h-[100px]' />
                                    </div>
                                    <div className="icon-title  text-center text-[#5f5f5f]">
                                        <h3 >Trust of over 2 Crore+ <br /> consumers
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-items">
                                <div className="icons h-[250px] w-[230px] shadow-[0px_1px_4px_rgba(0,0,0,.16)] rounded-md m-3 p-3 flex justify-center items-center flex-col">
                                    <div className="icon-img p-5 ">
                                        <img src="https://media.lalpathlabs.com/images/lead-page/Advanced Technology.png" alt="Trust-icon" className='w-[125px] h-[100px]' />
                                    </div>
                                    <div className="icon-title  text-center text-[#5f5f5f]">
                                        <h3 >Innovative and Advanced <br /> Technology </h3>
                                    </div>
                                </div>

                            </div>
                            <div className='card-items'>
                                <div className="icons h-[250px] w-[230px] shadow-[0px_1px_4px_rgba(0,0,0,.16)] rounded-md m-3 p-3 flex justify-center items-center flex-col">
                                    <div className="icon-img p-5 ">
                                        <img src="https://media.lalpathlabs.com/images/lead-page/Test Packages.png" alt="Trust-icon" className='w-[125px] h-[100px]' />
                                    </div><div className="icon-title  text-center text-[#5f5f5f] pb-6">
                                        <h3 >5000+ Tests and Packages </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <section className="awards dev-north-dncr">
                    <div className="award-container">
                        <div className="award-heading">
                            <h2 className="heading">Most Booked Packages</h2>
                        </div>
                        <hr id="achievements-divider" className="divider" />
                        <div className="card-booked-main">
                            <div className="card-booked">
                                <div className="card-header-booked">
                                    <h1 >LIVER &amp; KIDNEY PANEL</h1>
                                </div>
                                <div className="card-booked-content">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" alt="" />
                                    <p >Parameters Covered :</p>
                                    <span >18</span>
                                </div>
                                <div className="booked-price">
                                    <p >Price :</p>
                                    <span >₹ 1550</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn">Book Now</a>
                                </div>
                            </div>
                            <div className="card-booked">
                                <div className="card-header-booked">
                                    <h1 >HbA1c; GLYCOSYLATED HEMOGLOBIN</h1>
                                </div>
                                <div className="card-booked-content">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" alt="" />
                                    <p >Parameters Covered :</p><span >2</span>
                                </div>
                                <div className="booked-price">
                                    <p >Price :</p>
                                    <span >₹ 440</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn">Book Now</a>
                                </div>
                            </div>
                            <div className="card-booked">
                                <div className="card-header-booked">
                                    <h1 >LIPID PROFILE, BASIC</h1>
                                </div>
                                <div className="card-booked-content">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" alt="" />
                                    <p >Parameters Covered :</p>
                                    <span >6</span>
                                </div>
                                <div className="booked-price">
                                    <p >Price :</p>
                                    <span >₹ 1000</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-booked-main card-booked-main1">
                            <div className="card-booked">
                                <div className="card-header-booked">
                                    <h1 >Swasthfit Vitamin Package</h1>
                                </div>
                                <div className="card-booked-content">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" alt="" />
                                    <p >Parameters Covered :</p><span >2</span></div><div className="booked-price">
                                    <p >Price :</p>
                                    <span >₹ 1799</span>
                                    <span className="price-cross">₹ 2750</span>
                                </div><div className="booked-button">
                                    <a type="submit" className="btn">Book Now</a>
                                </div></div>
                            <div className="card-booked">
                                <div className="card-header-booked">
                                    <h1 >SWASTHFIT COMPLETE HEALTH CHECK</h1>
                                </div>
                                <div className="card-booked-content">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" alt="" />
                                    <p >Parameters Covered :</p><span >79</span></div><div className="booked-price">
                                    <p >Price :</p>
                                    <span >₹ 5000</span>
                                    <span className="price-cross">₹ 8960</span></div>
                                <div className="booked-button">
                                    <a type="submit" className="btn">Book Now</a>
                                </div></div>
                            <div className="card-booked"><div className="card-header-booked">
                                <h1 >SWASTH SUPER -2</h1></div><div className="card-booked-content">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" alt="" />
                                    <p >Parameters Covered :</p>
                                    <span >53</span>
                                </div>
                                <div className="booked-price">
                                    <p >Price :</p>
                                    <span >₹ 2350</span>
                                    <span className="price-cross">₹ 3370</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testim" className="testim">
                    <div className="testimonial-heading">
                        <h2 className="testimonialheading">Customer Testimonials</h2>
                    </div>
                    <div className="testimonial-divider">
                        <hr id="testimonial-divider" className="divider" />
                    </div>
                    <div className="wrap">
                        <span id="right-arrow" className="arrow right fa fa-chevron-right">
                        </span>
                        <span id="left-arrow" className="arrow left fa fa-chevron-left">
                        </span>
                        <ul id="testim-dots" className="dots">
                            <li className="dot"></li>
                            <li className="dot"></li>
                            <li className="dot active"></li>
                            <li className="dot"></li>
                            <li className="dot"></li>
                        </ul>

                        <div id="testim-content" className="cont">

                            <div className="">
                                <div className="img">
                                    <img src="https://media.lalpathlabs.com/images/lead-page/Men.png" alt="" />
                                </div>
                                <h2>Amit Singh, 42 <br />Delhi NCR</h2>
                                <p>Outstanding skill to deliver the information related subject she dealing within the organization. Team members are an asset for Dr Lal PathLabs.</p>
                            </div>
                            <div className="inactive">
                                <div className="img">
                                    <img src="https://media.lalpathlabs.com/images/lead-page/Women.png" alt="" />
                                </div>
                                <h2>Seema Chabbra, 38 <br />Bengaluru</h2>
                                <p>I had contacted the customer care team regarding the delay in my reports. They guided me that I can check the interim report after 30 minutes and will get the complete report around 9pm. It was a great help.Thanks to the awesome team!</p>
                            </div>
                            <div className="active">
                                <div className="img">
                                    <img src="https://media.lalpathlabs.com/images/lead-page/Men.png" alt="" />
                                </div>
                                <h2>Kumaran, 46 <br />Chennai </h2>
                                <p>I had to make bookings for home collection for my blood test. The team was very courteous and informative. God bless them. Need more such people in the healthcare work force.</p>
                            </div>
                            <div className="">
                                <div className="img">
                                    <img src="https://media.lalpathlabs.com/images/lead-page/Men.png" alt="" />
                                </div>
                                <h2>Kamlesh Asani, 52 <br /> Lucknow</h2>
                                <p>Reports provided in a very impeccable and focussed manner. Really appreciate this tremendous value add from Dr Lal Lab. Really appreciate this tremendous value add from Dr Lal Lab Wishing your team all the very best in this extremely noble service! </p>
                            </div>
                            <div className="">
                                <div className="img">
                                    <img src="https://media.lalpathlabs.com/images/lead-page/Women.png" alt="" />
                                </div>
                                <h2>Ishita Sharma, 33 <br /> Pune</h2>
                                <p>Excellent sense of timing. The Phlebotomist arrived exactly on time. I was at ease during the sample collection process, the way they supported me to be at my convenience and confidence is really something I will always remember. Kudos to you Dr Lal Pathlabs.</p>
                            </div>

                        </div>

                    </div>
                </section>
                

                {/* <section className="card-section test_faqs_section">
                    <div className="container card-container">
                        <div className="wrap h-wrap">
                            <div className="testimonial-heading">
                                <h2 className="testimonialheading">Frequently Asked Questions</h2>
                            </div>
                            <div className="book_test_details">
                                <div id="faq" className="accordion">
                                    <div className="card">
                                        <div className="card-header w-100" id="faqhead170">
                                            <a href="#" data-toggle="collapse" aria-expanded="false" className="btn btn-header-link collapsed" target="#faq170">What is the HbA1c test? </a>
                                        </div>
                                        <div data-parent="#faq" className="collapse _collapse" id="faq170">
                                            <div className="card-body">
                                                <p>The HbA1c test is a useful and simple blood test that can be used to diagnose diabetes and also to monitor blood glucose control in people with known diabetes.&nbsp;</p>
                                                <p>This test evaluates the average amount of glucose in the blood over the
                                                    last 2 to 3 months. It's also called haemoglobin A1c, glycated haemoglobin,
                                                    and glycosylated haemoglobin.&nbsp;</p>
                                                <p>Understanding and managing the HbA1c levels is
                                                    an essential part of overall diabetes management.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header w-100" id="faqhead171">
                                            <a href="#" data-toggle="collapse" aria-expanded="false" className="btn btn-header-link collapsed" target="#faq171">What does the HbA1c test measure? </a>
                                        </div>
                                        <div data-parent="#faq" className="collapse _collapse" id="faq171">
                                            <div className="card-body"><p>As we all know, glucose is the sugar present in the blood.
                                                When the amount of glucose is more in the blood, the more it binds to haemoglobin.
                                                Haemoglobin is the part of the red blood cells that carries oxygen throughout the body. &nbsp;</p>
                                                <p>The HbA1c test measures how much glucose is bound to the haemoglobin.&nbsp;</p>
                                                <p>HbA1c readings are reported as a percentage and can be interpreted as below:&nbsp;</p>
                                                <p><strong>HbA1c Level&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Indication&nbsp;</strong></p>
                                                <p>Less than 5.7%&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Normal&nbsp;</p>
                                                <p>5.7% to 6.4%&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Prediabetes&nbsp;</p>
                                                <p>&gt;= 6.5%&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                    Diabetes&nbsp;</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header w-100" id="faqhead172">
                                            <a href="#" data-toggle="collapse" aria-expanded="false" className="btn btn-header-link collapsed" target="#faq172">Why should I do the HbA1c test? </a>
                                        </div>
                                        <div data-parent="#faq" className="collapse _collapse" id="faq172">
                                            <div className="card-body"><p>Your doctor will recommend you to take the HbA1c
                                                test, if you suffer from some specific symptoms. The common symptoms are:&nbsp;</p>
                                                <ul>
                                                    <li>Increased thirst&nbsp;</li>
                                                    <li>Increased urination&nbsp;</li>
                                                    <li>Fatigue&nbsp;</li>
                                                    <li>Blurred vision&nbsp;</li>
                                                    <li>Slow-healing wounds&nbsp;</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header w-100" id="faqhead173">
                                            <a href="#" data-toggle="collapse" aria-expanded="false" className="btn btn-header-link collapsed" target="#faq173">How is the HbA1c test done? </a>
                                        </div>
                                        <div data-parent="#faq" className="collapse _collapse" id="faq173">
                                            <div className="card-body"><p>The HbA1c test is a simple blood test with no need
                                                for fasting before the test. The blood sample can be taken by
                                                the doctor or at a pathology lab</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header w-100" id="faqhead174">
                                            <a href="#" data-toggle="collapse" aria-expanded="false" className="btn btn-header-link collapsed" target="#faq174">How does HbA1c differ from a blood glucose level? </a>
                                        </div>
                                        <div data-parent="#faq" className="collapse _collapse" id="faq174">
                                            <div className="card-body">
                                                <p>HbA1c provides a longer-term trend, similar to an average,
                                                    of how high the blood sugar levels have been over a period of time
                                                    whereas blood glucose level is the concentration of glucose in the
                                                    blood at a single point in time</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header w-100" id="faqhead175">
                                            <a href="#" data-toggle="collapse" aria-expanded="false" className="btn btn-header-link collapsed" target="#faq175">How often HbA1c levels should be checked? </a>
                                        </div>
                                        <div data-parent="#faq" className="collapse _collapse" id="faq175">
                                            <div className="card-body">
                                                <div className="OutlineElement Ltr SCXW134383245 BCX0">
                                                    <p className="Paragraph SCXW134383245 BCX0">
                                                        <span className="TextRun Highlight SCXW134383245 BCX0" lang="EN-GB">
                                                            <span className="NormalTextRun SCXW134383245 BCX0">HbA1c levels may be checked every
                                                                three months until a person with diabetes reaches the
                                                                treatment goals.</span>
                                                        </span>
                                                        <span className="EOP SCXW134383245 BCX0">&nbsp;</span>
                                                    </p>
                                                </div>
                                                <div className="OutlineElement Ltr SCXW134383245 BCX0">
                                                    <p className="Paragraph SCXW134383245 BCX0"><span className="TextRun Highlight SCXW134383245 BCX0" lang="EN-GB"><span className="NormalTextRun SCXW134383245 BCX0">People with diabetes who are meeting treatment goals and have stable blood control are recommended to check their HbA1c levels every six months.</span></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>



            <button id="floatBtn" className="feedback" style={{ display: "block" }}>Booking Request</button>

            <section className="bg-[#f5bb17] relative left-0 bottom-0 w-[100%] mt-5 px-2">
                <div className="footerdiv p-3 my-1 mx-8 text-sm color-[#000]">
                    <p>© 2023, Dr. Lal PathLabs</p>
                    <p id="para1">LPL holds the right to terminate the offers at any time without any prior notice.</p>
                    <p id="para1">Free Covid Anti body test - Not applicable for Noida and Greater Noida location.</p>
                </div>
            </section>

        </>
    )
}

Book.getLayout = function getLayout(page) {
    return (
  
        <NestedLayout>{page}</NestedLayout>
    )
  }


export default Book

