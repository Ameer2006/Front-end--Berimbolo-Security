import React from 'react';
import img from '../assest/services/Importance Of Information Security Risk Assessment.jfif';
import img2 from '../assest/services/Video Surveillance Services.jfif'
import img3 from '../assest/services/Comprehensive Security Solutions for Enhanced Protection.jfif'
import img4 from '../assest/services/In the System Control Center Team of Tec_.. _ Stock Video _ Pond5'

export default function Services() {
  return (
    <div id="services" className="container-fluid">
      <div className="row text-center ">
        <div className="col-md-3 col-sm-9 mt-5 ">
          <div className="card" >
            <img className="card-img-top" src={img} style={{ height: "12rem" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Security risk assessments</h5>
              <p className="card-text">At Berimbolo Security, we specialize in conducting thorough security risk assessments to fortify your <br/> company's defenses against potential threats.</p>
              <a href="#" className="btn btn-primary">More details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-9 mt-5 ">
          <div className="card" >
            <img className="card-img-top" src={img2} style={{ height: "12rem" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Alarms and CCTV</h5>
              <p className="card-text">At Berimbolo Security,Secure your premises with our expert sales and installation services for state-of-the-art security systems, including alarms and CCTV.</p>
              <a href="#" className="btn btn-primary">More details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-9 mt-5 ">
          <div className="card" >
            <img className="card-img-top" src={img3} style={{ height: "12rem" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">system maintenance </h5>
              <p className="card-text">
                Ensure the continuous functionality and reliability of your security systems with our professional maintenance services, keeping your premises safeguarded at all times.</p>
              <a href="#" className="btn btn-primary">More details</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-9 mt-5 mb-5">
          <div className="card" >
            <img className="card-img-top" src={img4} style={{ height: "12rem" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">24/7 Monitoring </h5>
              <p className="card-text">
              Gain peace of mind with our round-the-clock monitoring services, overseeing alarm systems and CCTV<br/> footage to swiftly respond to any security incidents.
              </p>
              <a href="#" className="btn btn-primary">More details</a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
