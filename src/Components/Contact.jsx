import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <section className="contact bg-primary bg-gradient py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center py-4 mb-5">
                            <h4>Let's get in contact</h4>
                        </div>
                        <div className="col-md-6 maps d-flex justify-content-center align-items-center" >
                            <div className="mapouter"><div className="gmap_canvas">
                                <iframe title="map" width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=budapest&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="email">
                                <h6>Email</h6>
                                <ul className="list-unstyled">
                                    <li> kattkovacs@gmail.com</li>
                                </ul>
                            </div>
                            <div className="phone">
                                <h6>Phone</h6>
                                <ul className="list-unstyled">
                                    <li> +36 20 331-7516</li>
                                </ul>
                            </div>
                            <div className="location">
                                <h6>Location</h6>
                                <ul className="list-unstyled">
                                    <li> Budapest, Hungary</li>
                                </ul>
                            </div>
                            <div className="social">
                                <ul className="list-inline list-unstyled">
                                    <li className="list-inline-item">
                                        <NavLink to="#"><i className="fa fa-facebook-square fa-2x"></i></NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink to="#"><i className="fa fa-google-plus-square fa-2x"></i></NavLink>
                                    </li>
                                    <li className="list-inline-item">
                                        <NavLink to="#"><i className="fa fa-youtube-play fa-2x"></i></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div >
    )
}

export default Contact
