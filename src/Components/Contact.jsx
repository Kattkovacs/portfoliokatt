import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <section className="contact bg-primary bg-gradient py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center py-4 mb-5">
                            <h2>Get in touch</h2>
                        </div>
                        <div className="col-md-6 maps d-flex justify-content-center align-items-center" >
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" frameborder="0"  allowfullscreen></iframe>
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
