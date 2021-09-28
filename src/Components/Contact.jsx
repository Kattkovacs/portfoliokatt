import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="contact py-5 bg-light" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Get in touch</h4>
                            <hr />
                        </div>
                        <div className="col-md-6 maps" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" frameborder="0"  allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="address">
                                <h5>Address:</h5>
                                <ul className="list-unstyled">
                                    <li> H-1074</li>
                                    <li> Budapest</li>
                                </ul>
                            </div>
                            <div className="email">
                                <h5>Email:</h5>
                                <ul className="list-unstyled">
                                    <li> kattkovacs@gmail.com</li>
                                </ul>
                            </div>
                            <div className="phone">
                                <h5>Phone:</h5>
                                <ul className="list-unstyled">
                                    <li> +36 20 331-7516</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="social">
                                <ul className="list-inline list-unstyled">
                                    <li className="list-inline-item">
                                        <a href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><i className="fa fa-google-plus-square fa-2x"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><i className="fa fa-youtube-play fa-2x"></i></a>
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
