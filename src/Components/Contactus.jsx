import React from 'react'
import '../assest/style.css'


export default function Contactus() {
  return (
<section className="contact-section bg-black">
  <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5">
      <div className="col-md-4 mb-3 mb-md-0">
        <div className="card py-4 h-100">
          <div className="card-body text-center">
            <i className="fas fa-map-marked-alt text-primary mb-2" />
            <h4 className="text-uppercase m-0">Address</h4>
            <hr className="my-4 mx-auto" />
            <div className="small text-black-50">4923 Market Street, Orlando FL</div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3 mb-md-0">
        <div className="card py-4 h-100">
          <div className="card-body text-center">
            <i className="fas fa-envelope text-primary mb-2" />
            <h4 className="text-uppercase m-0">Email</h4>
            <hr className="my-4 mx-auto" />
            <div className="small text-black-50"><a href="#!">berimbolo@org.com </a></div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3 mb-md-0">
        <div className="card py-4 h-100">
          <div className="card-body text-center">
            <i className="fas fa-mobile-alt text-primary mb-2" />
            <h4 className="text-uppercase m-0">Phone</h4>
            <hr className="my-4 mx-auto" />
            <div className="small text-black-50">+1 555 902-8832</div>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <form className="d-block text-center">
          <div className="form-group">
            <label htmlFor="feedback" className="text-light">Your Feedback</label>
            <textarea className="form-control" id="feedback" placeholder="Enter your feedpack" rows={3} />
          </div>
          <button type="submit" href="/" className="btn btn-primary mt-5">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}
