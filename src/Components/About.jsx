import React from 'react'

const About = () => {
    return (
        <div>
            <section className="about body">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-4 mt-3 grey-text">
                            <h4>About</h4>
                        </div>
                    </div>
                </div>
                <div className="container grey-text">
                    <div className="row">
                        <div className="col-md-6 mx-auto py-5 d-table-cell justify-content-center align-items-center">
                            <img src={require("../img/katt.jpg").default} alt="Katt Kovacs" height="300px" width="300px" />
                        </div>
                        <div className="col-md-6 my-5">
                            <h4>Experience</h4>
                            <div className="lead mb-5 mt-5">
                                <h6>Contractor</h6>
                                <ul className="list-unstyled">
                                    <li>Junior Full Stack developer | 2021 -</li>
                                    <li>Backend and frontend bugfixing, documentation, unit
                                        testing on a public website and HR related admin page
                                        (PHP/Laravel/Vue.js/MySQL).</li>
                                </ul>
                            </div>
                            <div className="lead mb-5">
                                <h6>Contractor</h6>
                                <ul className="list-unstyled">
                                    <li>Freelance Graphic designer | 2012 -</li>
                                    <li>I work on digital and offline campaigns to create high
                                        quality marketing materials for platforms such as email,
                                        social media, landing pages, books, posters.</li>
                                </ul>
                            </div>
                            <div className="lead mb-5">
                                <h6>MÁV Nosztalgia Ltd.</h6>
                                <ul className="list-unstyled">
                                    <li>Project manager | 2018 - 2019</li>
                                    <li>Operative management of tour- and event organizing,
                                        filming projects. I was responsible for: planning, discover
                                        and analyze client needs, cost management, optimizating
                                        resources, on-site inspection. I worked close with team
                                        members, interacted with stakeholders.</li>
                                </ul>
                            </div>
                            <div className="lead mb-5">
                                <h6>Hungarian Public Roads Ltd.</h6>
                                <ul className="list-unstyled">
                                    <li>Communications specialist | 2016 - 2018</li>
                                    <li>I created offline- and online graphic designs, concepts,
                                        creative advertising content for various media. I have
                                        participated in event organization. I made video and
                                        photography reports.</li>
                                </ul>
                            </div>
                            <div className="lead mb-5">
                                <h6>MÁV Nosztalgia Ltd.</h6>
                                <ul className="list-unstyled">
                                    <li>Graphic designer & project manager | 2008 - 2016</li>
                                </ul>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Adobe CC</div>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML/CSS</div>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Javascript</div>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">React</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
