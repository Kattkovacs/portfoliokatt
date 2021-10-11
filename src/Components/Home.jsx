import React from 'react'
import { NavLink } from 'react-router-dom'
import Projects from './Projects'
import Service from './Service'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <section className="container my-5 py-4 body">
                <div className="row">
                    <div className="col-md-5 mt-5 grey-text">
                        <h2 className="display-6 mb-4">With great interest to the world
                        <br />
                        Katalin Katt Kovács</h2>
                        <p className="lead mb-4">I'm an experienced Photographer and Graphic Designer<br />with a demonstrated history of working in the transportation, travel and tourism industry.
                            <br />Currently my main areas of interests are UX/UI Design and Front-End Development.
                        </p>
                        <NavLink className="btn btn-outline-primary me-4 mb-4" to="/contact" role="button">Let's start</NavLink>
                        <NavLink className="btn btn-primary mb-4" to="/about" role="button">More About me</NavLink>
                        <br />
                    </div>
 
                        <div className="col-md-7 d-flex justify-content-center align-items-center">
                            <img src={require("../img/katt.jpg").default} alt="Katt Kovacs" height="300px" width="300px" />
                        </div>
                    </div>
                
            </section>
            <Projects />
            <Service />
            <Contact />
        </div>
    )
}

export default Home
