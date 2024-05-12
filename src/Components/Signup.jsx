import React from 'react'
import '../assest/style.css'

export default function Signup() {
  return (
    <div className='container d-flex justify-content-center '>

      <form method="" class="signin-form mt-5 ps-5 pe-5 pb-5" id="loginWindow">
        <div className='text-center'>
          <h2 className="heading-section mt-3">Sign up</h2>
        </div>
        <div className="form-group mb-3">
          <label className="label" htmlFor="name">Username</label>
          <input type="text" className="form-control" placeholder="Username" name="username" required />
        </div>
        <div className="form-group mb-3">
          <label className="label" htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" placeholder=" Password" required />
        </div>
        <div className="form-group mb-3">
          <label className="label">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="form-group d-flex justify-content-center ">
          <button className="btn btn-primary mb-4" type="submit">submit</button>
        </div>
        <div className="form-group d-md-flex">
          <div className="w-100 text-left">
            <label className=" checkbox-primary">Remember Me</label>
            <span className="checkmark ms-2" />
            <input type="checkbox" name="remember" defaultChecked />
          </div>
          <div className="w-50 text-md-right">
            <a href="/login">Log in</a>
          </div>
        </div>

      </form>
    </div>)
}
