import React from 'react'
import package1 from '../assest/products/package1.jfif'
import package2 from '../assest/products/package2.jfif'
import package3 from '../assest/products/package3.jfif'

import { Carousel } from 'react-bootstrap';


export default function Products() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='container text-center d-flex justify-content-center mt-5 mb-5'>

                    <div class="card " style={{ width: "60rem" }}>
                        <div class="row  align-items-center">
                            <div class="col-md-6 col-sm-8">
                                <img class="img-fluid mb-3 mb-lg-0" src={package1} alt="..." />
                            </div>
                            <div class="col-md-6 col-sm-8">
                                <div class="card-body">
                                    <h3 class="card-title text-primary">Basic security package</h3>
                                    <p class="card-text">1 x alarm system <br/>1 x CCTV camera <br/> Local CCTV footage storage<br/>NOT centrally monitored </p>
                                    <button class="btn btn-primary">Buy Naw</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className='container text-center d-flex justify-content-center mt-5 mb-5'>

                    <div class="card " style={{ width: "60rem" }}>
                        <div class="row  align-items-center">
                            <div class="col-md-6 col-sm-8">
                                <img class="img-fluid mb-3 mb-lg-0" src={package2} alt="..." />
                            </div>
                            <div class="col-md-6 col-sm-8">
                                <div class="card-body">
                                    <h3 class="card-title text-primary">Standard security package: </h3>
                                    <p class="card-text">1 x alarm system <br/>2 x CCTV camera <br/>Online and local CCTV footage storage <br/>NOT centrally monitored </p>
                                    <button class="btn btn-primary">Buy Naw</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className='container text-center d-flex justify-content-center mt-5 mb-5'>

                    <div class="card " style={{ width: "60rem" }}>
                        <div class="row  align-items-center">
                            <div class="col-md-6 col-sm-8">
                                <img class="img-fluid mb-3 mb-lg-0" src={package3} alt="..." />
                            </div>
                            <div class="col-md-6 col-sm-8">
                                <div class="card-body">
                                    <h3 class="card-title text-primary">Deluxe security package  </h3>
                                    <p class="card-text">1 x alarm system <br/>4 x CCTV camera <br/>Online and local CCTV footage storage <br/>o Centrally monitored  </p>
                                    <button class="btn btn-primary">Buy Naw</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel.Item>
            
        </Carousel>
    );
};

