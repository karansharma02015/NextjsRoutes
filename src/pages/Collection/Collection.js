import NestedLayout from '@/Layout/NestedLayout'
import React, { useState } from 'react'

const Collection = () => {

    const [form, setForm] = useState({})

    const [errors, setErrors] = useState({})

    const ValidateField = (field, value) => {
        switch (field) {
            case 'PatientName':
                return !value ? 'Please enter name' : (value.length < 3 ? 'Name must be longer than 2 characters' : null);
            case 'PhoneNumber':
                return !value ? 'Please enter mobile number' : (value.length !== 10 ? 'Mobile number must have 10 digits.' : null);
            case 'City':
                return value === '' ? 'Please select city' : null;
            case 'prescription':
                if (!value) {
                    return 'Please upload a prescription file';
                }
                const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
                if (!allowedFileTypes.includes(value.type)) {
                    return 'Invalid file type. Please upload an image (JPEG/PNG) or a PDF file.';
                }
                const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
                if (value.size > maxSizeInBytes) {
                    return 'File size exceeds the allowed limit (5 MB).';
                }
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

    }

    const ValidateForm = () => {
        const { PatientName, PhoneNumber, prescription, condition, whatsapp } = form;
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

        if (!prescription) {
            newErrors.prescription = 'Please upload a prescription file';
        } else {
            const prescriptionFileTypeError = ValidateField('prescription', prescription);
            if (prescriptionFileTypeError) {
                newErrors.prescription = prescriptionFileTypeError;
            }
        }

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

    return (
        <>


            <section className="main-section flex w-[100%] items-center justify-center md:justify-between px-2 md:px-5">
                <div className="container px-7 main-container flex md:flex-row flex-col justify-center  h-auto relative">
                    <div className="banner banner2 w-[100%] md:w-[73%] md:mx-3">
                        <img src="https://www.lalpathlabs.com/assets/landing-page/img/land-banner.jpg" alt="banner" className="banner-image w-[100%] hidden md:block rounded-2xl h-[425px]" />
                        <img src="https://media.lalpathlabs.com/images/lead-page/mobilebanner1.jpg" alt="" className="mobilebanner w-full mobilebanner1 block md:hidden" />
                    </div>

                    <div className="leadform-box m-auto bg-[#f4faff] mt-3 md:mt-0 items-center flex flex-col w-[80%] md:w-[23%] h-auto justify-center rounded-lg pb-5 md:pb-3 md:pt-3 border-2 border-[rgba(252_192_80)]">

                        <h2 className="form-title text-[#0054a5] uppercase text-center mt-3">Book Your Test</h2>
                        <form action="#" className="form-box py-1 px-2 mt-2 mx-1 relative flex flex-col justify-center content-center">
                            <label className='mb-2'> Name *</label>
                            <div className="form-element pb-4">

                                <input onBlur={(e) => setField('PatientName', e.target.value)} onChange={(e) => setField('PatientName', e.target.value)} name="PatientName" type="text" id="PatientName" placeholder="Name" className="form-input w-full h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md" />
                                <div className="text-sm pt-1 text-red-500">
                                    <div > {errors.PatientName}
                                    </div>
                                </div>


                            </div>
                            <label className='mb-2'> Mobile Number *</label>
                            <div className="form-element pb-4">

                                <input maxLength={10} onBlur={(e) => setField('PhoneNumber', e.target.value)} onChange={(e) => setField('PhoneNumber', e.target.value)} name="PhoneNumber" type="text" id="PhoneNumber" placeholder="Mobile Number" className="form-input w-full h-9 outline-none border-[#479bff] border-solid border align-middle p-2 rounded-md" />
                                <div className="text-sm pt-1 text-red-500">
                                    <div> {errors.PhoneNumber} </div>
                                </div>

                            </div>
                            <label className='mb-2'>Attach Prescription * </label>
                            <div className="form-element pb-4">

                                <input onChange={(e) => setField('prescription', e.target.files[0])} type="file" name="prescription" formcontrolname="prescription" placeholder="Description" class="form-input w-full h-10 p-1 outline-none border-[#479bff] border-solid border align-middle rounded-md" />
                                <div className="text-sm pt-1 text-red-500">
                                    <div > {errors.prescription} </div>
                                </div>

                            </div>
                            <div className="form-element whatsapp-box flex flex-row w-full items-center mb-2">
                                <input onChange={(e) => setField('whatsapp', e.target.checked)} type="checkbox" name="whatsapp" value="whatsapp agree" className='ml-1 mr-2 cursor-pointer h-4 w-4' />
                                <label className='text-xs'>
                                    <i className="fa fa-whatsapp"></i>Opt-In for Whatsapp Updates</label>
                            </div>
                            <div className="form-element condition-box ">
                                <input onChange={(e) => setField('condition', e.target.checked)} type="checkbox" name="condition" value="agree" className='ml-1 mr-2 mt-1 cursor-pointer h-4 w-4' />
                                <label className='text-xs'>I authorize Dr Lal PathLabs and its representatives to contact me regarding booking and Test details.  <a href="https://www.lalpathlabs.com/term-of-use.aspx">T&amp;C*</a>
                                </label>
                            </div>
                            <div className="form_button flex flex-col w-100 mt-3 mb-0">
                                <button onClick={handleSubmit} className="booknow-btn bg-[#0054a5] h-9 text-white flex justify-center p-3 rounded-md items-center opacity-80">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

Collection.getLayout = function getLayout(page) {
    return (

        <NestedLayout>{page}</NestedLayout>
    )
}

export default Collection