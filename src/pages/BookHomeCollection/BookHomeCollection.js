import React, { useState } from 'react'
import Link from 'next/link';
import Layout from '@/Layout/layout';
import NestedLayout from '@/Layout/NestedLayout';


const BookHomeCollection = () => {
    

    const [form, setForm] = useState({})

    const [errors, setErrors] = useState({})

    const [showOtpInput, setShowOtpInput] = useState(false);

    const [isMobileNumberValid, setIsMobileNumberValid] = useState(false);


    const ValidateField = (field, value) => {
        switch (field) {
            case 'PatientName':
                return !value ? 'Please enter name' : (value.length < 3 ? 'Name must be longer than 2 characters' : null);
            case 'PhoneNumber':
                return !value ? 'Please enter mobile number' : (value.length !== 10 ? 'Mobile number must have 10 digits.' : null);
            case 'City':
                return value === '' ? 'Please select city' : null;
            default:
                return null;
        }
    };

    const setField = (field, value) => {

        setForm({
            ...form,
            [field]: value
        })

        const fieldErrors = ValidateField(field, value);

        setErrors({
            ...errors,
            [field]: fieldErrors,
        });

        if (field === 'PhoneNumber') {
            setIsMobileNumberValid(!fieldErrors);
        }

    }

    const ValidateForm = () => {
        const { PatientName, PhoneNumber, City, condition, whatsapp } = form;
        const newErrors = {}

        if (!PhoneNumber || (PhoneNumber.length > 0 && PhoneNumber.length !== 10)) {
            newErrors.PhoneNumber = 'Please enter mobile number';
        }
        if (!condition) {
            newErrors.checked = 'please checked'
        }
        if (!whatsapp) {
            newErrors.checked = 'please checked'
        }

        if (!City || City === 'Select City')
            newErrors.City = 'Please select city'

        if (!PatientName || PatientName === '')
            newErrors.PatientName = 'Please enter name'
        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = ValidateForm()

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);


        } else {

            console.log(form);
            alert('thanks')
        }

    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };



    return (
        <>
            <section className="main-section flex w-[100%] items-center justify-center md:justify-between px-2 md:px-5">
                <div className="main-container flex md:flex-row flex-col justify-center w-[100%] h-auto relative">
                    <div className="banner banner2 w-[100%] md:w-[73%] md:mx-3">
                        <img src="https://media.lalpathlabs.com/images/lead-page/banner1.jpg" alt="banner" className="banner-image w-[100%] hidden md:block rounded-2xl h-[425px]" />
                        <img src="https://media.lalpathlabs.com/images/lead-page/mobilebanner1.jpg" alt="" className="mobilebanner w-full mobilebanner1 block md:hidden" />
                    </div>

                    <div className="leadform-box m-auto bg-[#f4faff] mt-3 md:mt-0 items-center flex flex-col w-[80%] md:w-[23%] h-[425px] justify-center rounded-lg pb-5 md:pb-0 border-2 border-[rgba(252_192_80)]">

                        <h2 className="form-title text-[#0054a5] uppercase text-center mt-3">Book Your Test</h2>
                        <form action="#" className="form-box py-1 px-2 mt-2 mx-1 relative flex flex-col justify-center content-center">
                            <div className="form-element pb-4">
                                <input onBlur={(e) => setField('PatientName', e.target.value)} onChange={(e) => setField('PatientName', e.target.value)} name="PatientName" type="text" id="PatientName" placeholder="Name" className="form-input w-full h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md" />
                                <div className="text-sm pt-1 text-red-500">
                                    <div > {errors.PatientName}
                                    </div>
                                </div>

                            </div>
                            <div className="form-element w-full pb-4">
                                <div className='flex '>
                                    <input maxLength={10} onBlur={(e) => setField('PhoneNumber', e.target.value)} onChange={(e) => setField('PhoneNumber', e.target.value)} name="PhoneNumber" type="text" id="PhoneNumber" placeholder="Mobile Number" className="form-input w-[60%] h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md" />
                                    <div class="w-[40%] pl-2">
                                        <button disabled={!isMobileNumberValid}   onClick={() => setShowOtpInput(true)} class="btn btn-loginn btn-loginn-aff bg-[#fecc4e] p-[6px] ml-2 rounded-md" >Send OTP</button>
                                    </div>
                                </div>
                                <div className="text-sm pt-1 text-red-500">
                                    <div> {errors.PhoneNumber} </div>
                                </div>

                                {showOtpInput && (
                                    <div className="flex mt-3">
                                        <input
                                            type="text"
                                            // Add necessary props and styles for OTP input
                                            placeholder="Enter OTP"
                                            className="form-input w-[60%] h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md"
                                        />
                                        {/* Add submit button or any other action buttons here */}
                                    </div>
                                )}

                               

                            </div>
                            <div className="form-element pb-4">
                                <select onBlur={(e) => setField('City', e.target.value)} onChange={(e) => setField('City', e.target.value)} name="City" id="city" className="form-input w-full h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md">
                                    <option value="">Select City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Gurgaon">Gurgaon</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Greater Noida">Greater Noida</option>
                                    <option value="Faridabad">Faridabad</option>
                                    <option value="Ghaziabad">Ghaziabad</option>
                                </select>
                                <div className="text-sm pt-1 text-red-500">
                                    <div > {errors.City} </div>
                                </div>
                            </div>
                            <div className="form-element whatsapp-box flex flex-row w-full items-center mb-2">
                                <input onChange={(e) => setField('whatsapp', e.target.checked)} type="checkbox" name="whatsapp" value="whatsapp agree" className='ml-1 mr-2 cursor-pointer h-4 w-4' />
                                <label className='text-sm'>
                                    <i className="fa fa-whatsapp"></i>Opt-In for Whatsapp Updates</label>
                            </div>
                            <div className="form-element condition-box ">
                                <input onChange={(e) => setField('condition', e.target.checked)} type="checkbox" name="condition" value="agree" className='ml-1 mr-2 mt-1 cursor-pointer h-4 w-4' />
                                <label className='text-sm'>I authorize Dr Lal PathLabs to contact me regarding Test details. <a href="https://www.lalpathlabs.com/term-of-use.aspx">T&amp;C*</a>
                                </label>
                            </div>
                            <div className="form_button flex flex-col w-100 mt-3 mb-0">
                                <button onClick={handleSubmit} className="booknow-btn bg-[#0054a5] h-9 text-white flex justify-center p-3 rounded-md items-center opacity-80">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



            <section className="card-section mt-3 test_details_overview md:mx-40 ml-5 mr-5 mb-5 rounded-lg bg-[#e9f3ff] md:bg-white">
                <div className="card-container p-3">
                    <div className="text-left w-100 book_test_heading">
                        <strong >TEST DETAILS</strong>
                    </div>
                    <div className="book_test_details mt-3 mx-auto text-sm md:text-base">

                        <p>HbA1c also called Glycated hemoglobin gives the average sugar level in the body over a period of 2 to 3 months unlike blood sugar which indicates daily level. This test is used to diagnose prediabetes, diagnose type 1 and type 2 diabetes &amp; monitor your diabetes treatment plan. Initial A1C test also helps to establish your baseline level. How often you need this test depends on the type of diabetes, your treatment plan, how well you are meeting treatment goals and your doctor's clinical judgment. The recommended protocol for this test is: Once every year if you have prediabetes; Twice a year if you do not use insulin and your blood sugar level is consistently within your target range; Four times a year if you take insulin or have trouble keeping your blood sugar level within your target range</p>

                    </div>
                </div>
            </section>

            <section className="card-section w-full flex justify-center flex-col items-center">
                <div className="container card-container p-3">
                    <div className="card-div w-auto flex flex-col items-center justify-center">
                        <h2 className='text-[#0559ab] text-base md:text-2xl m-1 md:m-4 md:p-3 p-1 font-semibold'>Why Dr Lal PathLabs ?</h2>
                        <hr id="achievements-divider" className="divider bg-[#0559ab] h-[3px] w-[67%]" />
                        <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-0 m-4 md:p-4 p-2 lg:grid-cols-4 md:gap-5 ">
                            <div className="card-items">
                                <div className="icons hover:duration-75 hover:delay-25 hover:transition hover:scale-110 h-[250px] w-[230px] shadow-[0px_1px_4px_rgba(0,0,0,.16)] rounded-md m-3 p-3 flex justify-center items-center flex-col">
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
                <section className="awards dev-north-dncr flex flex-col justify-center items-center">
                    <div className="award-container w-[100%] flex flex-col justify-center items-center">
                        <div className="award-heading">
                            <h2 className="heading text-[#0559ab] text-base md:text-2xl m-1 md:m-4 md:p-3 p-1 font-semibold">Most Booked Packages</h2>
                        </div>
                        <hr id="" className="divider bg-[#0559ab] h-[3px] w-[67%]" />
                        <div className="card-booked-main grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:p-4 md:m-4 m-2 p-2 ">
                            <div className="card-booked w-[300px] text-center m-3 shadow-[0px_1px_4px_rgba(0,0,0,.16)] bg-white rounded-[5px]">
                                <div className="card-header-booked text-[#0554ab] bg-[#ddedff] px-4 py-3 font-semibold text-base">
                                    <h1 >LIVER &amp; KIDNEY PANEL</h1>
                                </div>
                                <div className="card-booked-content flex justify-center px-3 py-5 text-lg">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" className='pr-1' alt="" />
                                    <p className=' text-[#565555]'>Parameters Covered :</p>
                                    <span className='text-[#0554ab] font-semibold'>18</span>
                                </div>
                                <div className="booked-price flex justify-center text-lg px-2 pb-5">
                                    <p className='text-[#565555]'>Price :</p>
                                    <span className='text-[#49a461] font-semibold'>₹ 1550</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn bg-[#0554ab] text-white py-1 px-8 mb-4 text-lg rounded-[3px]">Book Now</a>
                                </div>
                            </div>
                            <div className="card-booked w-[300px] text-center m-3 shadow-[0px_1px_4px_rgba(0,0,0,.16)] bg-white rounded-[5px]">
                                <div className="card-header-booked text-[#0554ab] bg-[#ddedff] px-4 py-3 font-semibold text-base">
                                    <h1 >LIVER &amp; KIDNEY PANEL</h1>
                                </div>
                                <div className="card-booked-content flex justify-center px-3 py-5 text-lg">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" className='pr-1' alt="" />
                                    <p className=' text-[#565555]'>Parameters Covered :</p>
                                    <span className='text-[#0554ab] font-semibold'>18</span>
                                </div>
                                <div className="booked-price flex justify-center text-lg px-2 pb-5">
                                    <p className='text-[#565555]'>Price :</p>
                                    <span className='text-[#49a461] font-semibold'>₹ 1550</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn bg-[#0554ab] text-white py-1 px-8 mb-4 text-lg rounded-[3px]">Book Now</a>
                                </div>
                            </div>
                            <div className="card-booked w-[300px] text-center m-3 shadow-[0px_1px_4px_rgba(0,0,0,.16)] bg-white rounded-[5px]">
                                <div className="card-header-booked text-[#0554ab] bg-[#ddedff] px-4 py-3 font-semibold text-base">
                                    <h1 >LIVER &amp; KIDNEY PANEL</h1>
                                </div>
                                <div className="card-booked-content flex justify-center px-3 py-5 text-lg">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" className='pr-1' alt="" />
                                    <p className=' text-[#565555]'>Parameters Covered :</p>
                                    <span className='text-[#0554ab] font-semibold'>18</span>
                                </div>
                                <div className="booked-price flex justify-center text-lg px-2 pb-5">
                                    <p className='text-[#565555]'>Price :</p>
                                    <span className='text-[#49a461] font-semibold'>₹ 1550</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn bg-[#0554ab] text-white py-1 px-8 mb-4 text-lg rounded-[3px]">Book Now</a>
                                </div>
                            </div>
                            <div className="card-booked w-[300px] text-center m-3 shadow-[0px_1px_4px_rgba(0,0,0,.16)] bg-white rounded-[5px]">
                                <div className="card-header-booked text-[#0554ab] bg-[#ddedff] px-4 py-3 font-semibold text-base">
                                    <h1 >LIVER &amp; KIDNEY PANEL</h1>
                                </div>
                                <div className="card-booked-content flex justify-center px-3 py-5 text-lg">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" className='pr-1' alt="" />
                                    <p className=' text-[#565555]'>Parameters Covered :</p>
                                    <span className='text-[#0554ab] font-semibold'>18</span>
                                </div>
                                <div className="booked-price flex justify-center text-lg px-2 pb-5">
                                    <p className='text-[#565555]'>Price :</p>
                                    <span className='text-[#49a461] font-semibold'>₹ 1550</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn bg-[#0554ab] text-white py-1 px-8 mb-4 text-lg rounded-[3px]">Book Now</a>
                                </div>
                            </div>
                            <div className="card-booked w-[300px] text-center m-3 shadow-[0px_1px_4px_rgba(0,0,0,.16)] bg-white rounded-[5px]">
                                <div className="card-header-booked text-[#0554ab] bg-[#ddedff] px-4 py-3 font-semibold text-base">
                                    <h1 >LIVER &amp; KIDNEY PANEL</h1>
                                </div>
                                <div className="card-booked-content flex justify-center px-3 py-5 text-lg">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" className='pr-1' alt="" />
                                    <p className=' text-[#565555]'>Parameters Covered :</p>
                                    <span className='text-[#0554ab] font-semibold'>18</span>
                                </div>
                                <div className="booked-price flex justify-center text-lg px-2 pb-5">
                                    <p className='text-[#565555]'>Price :</p>
                                    <span className='text-[#49a461] font-semibold'>₹ 1550</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn bg-[#0554ab] text-white py-1 px-8 mb-4 text-lg rounded-[3px]">Book Now</a>
                                </div>
                            </div>

                            <div className="card-booked w-[300px] text-center m-3 shadow-[0px_1px_4px_rgba(0,0,0,.16)] bg-white rounded-[5px]">
                                <div className="card-header-booked text-[#0554ab] bg-[#ddedff] px-4 py-3 font-semibold text-base">
                                    <h1 >LIVER &amp; KIDNEY PANEL</h1>
                                </div>
                                <div className="card-booked-content flex justify-center px-3 py-5 text-lg">
                                    <img src="https://media.lalpathlabs.com/images/test-tube-booked.png" className='pr-1' alt="" />
                                    <p className=' text-[#565555]'>Parameters Covered :</p>
                                    <span className='text-[#0554ab] font-semibold'>18</span>
                                </div>
                                <div className="booked-price flex justify-center text-lg px-2 pb-5">
                                    <p className='text-[#565555]'>Price :</p>
                                    <span className='text-[#49a461] font-semibold'>₹ 1550</span>
                                </div>
                                <div className="booked-button">
                                    <a type="submit" className="btn bg-[#0554ab] text-white py-1 px-8 mb-4 text-lg rounded-[3px]">Book Now</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="testim" className="testim  w-[100%] text-center">
                    <div className=" flex flex-col">
                        <h2 className="testimonialheading text-2xl text-[#0559ab] p-3 m-3 font-bold">Customer Testimonials</h2>

                    </div>
                    <div className="testimonial-divider">
                        <hr id="achievements-divider" className="divider bg-[#0559ab] h-[3px] w-[67%]" />
                    </div>
                    <div className="wrap relative w-full px-7 py-12">
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



                <section className='card-section w-[100%] test_faqs_section flex flex-col justify-center items-center mb-14'>
                    <div className='md:w-[80%] w-[90%]'>
                        <div className='h-wrap'>
                            <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
                                <div class="flex flex-col items-center">
                                    <h2 class="font-bold md:text-2xl text-xl mt-5 tracking-tight text-[#0559ab]">
                                        Frequently Asked Questions
                                    </h2>

                                </div>
                                <div class="grid  divide-neutral-200 mt-8">
                                    <div class="">
                                        <details class="group bg-[#ddedff] md:px-5 md:py-2 px-3 py-2 w-full rounded-[5px]">
                                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span> What is the Swasth Super 4 package? </span>
                                                <span class="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                                SAAS platform is a cloud-based software service that allows users to access
                                                and use a variety of tools and functionality.
                                            </p>
                                        </details>
                                    </div>
                                    <div class="mt-6">
                                        <details class="group bg-[#ddedff] md:px-5 md:py-2 px-3 py-2">
                                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span> What does the Swasth Super 4 package measure? </span>
                                                <span class="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                                We offers a variety of billing options, including monthly and annual subscription plans,
                                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                                card or other secure online payment method.
                                            </p>
                                        </details>
                                    </div>
                                    <div class="mt-6">
                                        <details class="group bg-[#ddedff] md:px-5 md:py-2 px-3 py-2">
                                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span>When is the Swasth Super 4 package recommended? </span>
                                                <span class="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                                We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                                                satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                                                for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                                                basis.
                                            </p>
                                        </details>
                                    </div>
                                    <div class="mt-6">
                                        <details class="group bg-[#ddedff] md:px-5 md:py-2 px-3 py-2">
                                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span> How is the Swasth Super 4 package performed? </span>
                                                <span class="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                                To cancel your We subscription, you can log in to your account and navigate to the
                                                subscription management page. From there, you should be able to cancel your subscription and stop
                                                future billing.
                                            </p>
                                        </details>
                                    </div>
                                    <div class="mt-6">
                                        <details class="group bg-[#ddedff] md:px-5 md:py-2 px-3 py-2">
                                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span> What are the risks of the Swasth Super 4 package? </span>
                                                <span class="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                                We offers a free trial of its  platform for a limited time. During the trial period,
                                                you will have access to a limited set of features and functionality, but you will not be charged.
                                            </p>
                                        </details>
                                    </div>
                                    <div class="mt-6 mb-6">
                                        <details class="group bg-[#ddedff] md:px-5 md:py-2 px-3 py-2">
                                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span>What the results may indicate? </span>
                                                <span class="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                                Documentation is available on the company's website and can be accessed by
                                                logging in to your account. The documentation provides detailed information on how to use the ,
                                                as well as code examples and other resources.
                                            </p>
                                        </details>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>



            <button id="floatBtn" className="feedback" style={{ display: "block" }} onClick={scrollToTop}>Booking Request</button>

            <section className="bg-[#f5bb17] relative left-0 bottom-0 w-[100%] mt-5 px-2 py-4 md:block hidden">
                <div className="footerdiv p-3 my-1 mx-8 text-sm color-[#000]">
                    <p>© 2023, Dr. Lal PathLabs</p>
                    <p id="para1">LPL holds the right to terminate the offers at any time without any prior notice.</p>
                    <p id="para1">Free Covid Anti body test - Not applicable for Noida and Greater Noida location.</p>
                </div>
            </section>

        </>
    )
}

BookHomeCollection.getLayout = function getLayout(page) {
    return (

        <NestedLayout>{page}</NestedLayout>
    )
}


export default BookHomeCollection