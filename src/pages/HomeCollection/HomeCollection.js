import Layout from '@/Layout/layout'
import React, { useState } from 'react'

const HomeCollection = () => {

    const [formdata, setFormData] = useState(
        {
            name: '',
            email: '',
            phoneNumber: '',
            otp: '',
            selectedCity: '',
            file: null,
        }
    )


    const [otpSent, setOtpSent] = useState(false);

    const handleChange = (e) => {

        const { name, value, type } = e.target;

        if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                file: e.target.files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

   

    const handleSendOtp = async () => {

        const otpApiUrl = `https://liveapi.lalpathlabs.com/api/Ecommerce/sendsms?Phoneno=${formdata.phoneNumber}`;


        if (formdata.phoneNumber) {
            try {
                const otpResponse = await fetch(otpApiUrl, {
                    method: 'GET',
                });

                if (otpResponse.ok) {

                    setOtpSent(true);
                } else {

                    console.error('Failed to send OTP.');
                }
            } catch (error) {

                console.error('Error sending OTP:', error);
            }
        } else {

            console.error('Phone number is required to send OTP.');
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();


        const submitFormApiUrl = `https://liveapi.lalpathlabs.com/api/Common/Homecollection`;

        const formDataForUpload = new FormData();

        formDataForUpload.append('name', formdata.name);
        formDataForUpload.append('email', formdata.email);
        formDataForUpload.append('phoneNumber', formdata.phoneNumber);
        formDataForUpload.append('otp', formdata.otp);
        formDataForUpload.append('selectedCity', formdata.selectedCity);
        formDataForUpload.append('file', formdata.file);


        if (otpSent) {
            const formResponse = await fetch(submitFormApiUrl, {
                method: 'POST',
                body: formDataForUpload,
            });

            if (formResponse.ok) {

                console.log('Form submitted successfully!');
            } else {

                console.error('Form submission failed.');
            }
        } else {

            console.error('Please send OTP before submitting the form.');
        }

        console.log(formdata);
    };


    return (
        <>

            <section class="happy-to-hear" >
                <form novalidate="" class="happy-to-hear-form ng-untouched ng-pristine ng-invalid" onSubmit={handleFormSubmit}>
                    <div class="mx-24">
                        <div class="grid grid-cols-1 radius-inner">
                            <div class="col-md-12">
                                <h3 class="section-heading1">Home Collection Query Form</h3>
                            </div>
                            <p> Hi there. Don't know which test/package to choose from? Nothing to worry about! Please fill in the details below and someone from our team will call back for home collection confirmation </p>
                            <p class="mb-3">
                                <strong>
                                    <span class="text-danger">Note: </span>
                                    <span>Fields marked with * are mandatory.</span>
                                </strong>
                            </p>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="">Patient Name <sup>*</sup></label>
                                    <input type="text" name="name" value={formdata.name} onChange={handleChange} formcontrolname="contactPersonName" placeholder="" class="form-control ng-untouched ng-pristine ng-invalid" />
                                    <div class="invalid-feedback">
                                        <div class="ng-star-inserted">Please enter ptient name</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="">E-mail</label>
                                    <input type="email" name="email" value={formdata.email} onChange={handleChange} formcontrolname="email" placeholder="" class="form-control ng-valid ng-untouched ng-pristine" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                    <div class="invalid-feedback">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="">Phone Number <sup>*</sup></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">+91</span>
                                        </div>
                                        <input type="text" name="phoneNumber" value={formdata.phoneNumber} onChange={handleChange} maxlength="10" formcontrolname="contactPersonContact" placeholder="" class="form-control ng-untouched ng-pristine ng-invalid" pattern="^((\+91-?)|0)?[0-9]{10}$" />
                                        <div class="invalid-feedback">
                                            <div class="ng-star-inserted">Please enter phone number</div>
                                        </div>
                                        <button class="btn btn-loginn" onClick={handleSendOtp} style={{ cursor: 'pointer' }} title="Please enter mobile" disabled=""> Get OTP </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5"><div class="form-group">
                                <label for="">OTP<sup>*</sup></label>
                                <input type="text" placeholder="Enter OTP" name="otp" value={formdata.otp} onChange={handleChange} id="otpID" formcontrolname="otp" class="form-control ng-untouched ng-pristine ng-invalid" />
                                <span class="invalid-feedback">
                                    <span class="ng-star-inserted"> Please enter OTP </span>
                                </span>
                                <div class="ng-star-inserted"></div>
                            </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="">Patient City <sup>*</sup>
                                    </label>
                                    <select formcontrolname="City" name="selectedCity" value={formdata.selectedCity} onChange={handleChange} class="form-control ng-untouched ng-pristine ng-invalid">
                                        <option value="">Select City</option>
                                        <option value="Agartala" class="ng-star-inserted"> Agartala</option>
                                        <option value="Varanasi" class="ng-star-inserted"> Varanasi</option>
                                        <option value="Yamuna Nagar" class="ng-star-inserted"> Yamuna Nagar</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        <div class="ng-star-inserted">Please select city</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="">Attach Prescription</label>
                                    <input type="file" name="file" onChange={handleChange} formcontrolname="prescription" placeholder="Description" class="form-control ng-valid ng-untouched ng-pristine" />
                                    <span class="invalid-feedback"></span></div>
                            </div>
                            <div class="col-md-12">
                                <div class="center-btn">
                                    <button type="submit" class="btn cmnyellow-btn" style={{ cursor: 'pointer' }} title="Disabled untill form is valid" disabled="">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>






        </>
    )
}

HomeCollection.getLayout = function getLayout(page) {
    return (

        <Layout>{page}</Layout>

    )
}


export default HomeCollection