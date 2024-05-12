import React from 'react'
import '../assest/style.css'
import dust from '../assest/FAQs/dust.jfif'
import CCTV from '../assest/FAQs/CCTV.jfif'
import alarm from '../assest/FAQs/Alarm.png'
import power from '../assest/FAQs/Power.png'
import lock from '../assest/FAQs/Lock.jfif'

export default function FAQs() {
  return (
    <div class="projects-section pb-5" id="projects">
            <h1 class="mx-auto my-0 text-light d-flex justify-content-center mb-5">Common problems and their
                solutions
            </h1>
            <div class="container px-4 px-lg-5">
                <div class="row py-3 bg-light  gx-0 mb-5 mb-lg-5 align-items-center ">
                    <div class="col-md-6 col-sm-12 "><img class="img-fluid mb-3 ms-3 mb-lg-0"
                            src={dust} alt="..." 
                            style={{ height: "18rem" }} /></div>
                    <div class="col-md-6 col-sm-12 ">
                        <div class="featured-text text-center text-lg-left">
                            <h3 class="text-primary">System Malfunction due to Dust Build-up</h3>
                            <p class="text-black mb-0">Regularly clean system components to remove dust and debris, ensuring optimal performance and preventing overheating.</p>
                        </div>
                    </div>
                </div>
                <div class="row py-3 bg-light gx-0 mb-5 mb-lg-5 align-items-center">
                    <div class="col-md-6 col-sm-12 ">
                        <div class="featured-text-right text-center text-lg-left">
                            <h3 class="text-primary">Interference with CCTV Footage Quality</h3>
                            <p class="text-black mb-0"> Position cameras away from sources of glare or obstruction, adjust camera settings for optimal lighting conditions, and regularly clean camera lenses to maintain clear footage.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 "><img class="img-fluid mb-3 mb-lg-0"
                            src={CCTV} style={{ height: "18rem" }}
                            alt="..." width="500" /></div>
                </div>
                <div class="row py-3 bg-light gx-0 mb-5 mb-lg-5 align-items-center">
                    <div class="col-md-6 col-sm-12 "><img class="img-fluid mb-3 mb-lg-0"
                            src={alarm} style={{ height: "18rem" }}
                            alt="..." width="500" /></div>
                    <div class="col-md-6 col-sm-12 ">
                        <div class="featured-text text-center text-lg-left">
                            <h3 class="text-primary">Ineffective Alarm Triggering</h3>
                            <p class="text-black mb-0">
                            Regularly test alarm sensors for proper functioning, ensure all entry points are adequately secured, and update alarm system software to the latest version to enhance accuracy.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row py-3 bg-light gx-0 mb-5 mb-lg-5 align-items-center">
                    <div class="col-md-6 col-sm-12 ">
                        <div class="featured-text-right text-center text-lg-left">
                            <h3 class="text-primary">Power Outages affecting System Functionality</h3>
                            <p class="text-black mb-0">
                            Install backup power sources such as uninterruptible power supplies (UPS) to ensure continuous operation during power outages, and regularly test backup systems to verify functionality.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 "><img class="img-fluid mb-3 mb-lg-0"
                            src={power} style={{ height: "18rem" }}
                            alt="..." width="500" /></div>
                </div>
                <div class="row py-3 bg-light gx-0 align-items-center">
                    <div class="col-md-6 col-sm-12 "><img class="img-fluid mb-3 mb-lg-0"
                            src={lock} style={{ height: "18rem" }}
                            alt="..." width="500" /></div>
                    <div class="col-md-6 col-sm-12 ">
                        <div class="featured-text text-center text-lg-left">
                            <h3 class="text-primary">Unauthorized Access to System Controls</h3>
                            <p class="text-black mb-0">
                            Implement robust authentication measures such as unique access codes or biometric identification, regularly review access logs for suspicious activity, and update system passwords regularly to prevent unauthorized access.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

  )
}
