'use client'

import React from 'react'
import Layout from "@/Layout/layout";


const Nearest = () => {
  return (
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
  )
}

Nearest.getLayout = function getLayout(page) {
    return (
      <Layout>{page}</Layout>
    )
  }
  export default Nearest