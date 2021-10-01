import React from 'react'
import { NavLink } from 'react-router-dom'
import Gallery from './Gallery'
import Service from './Service'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <section className="container my-5 py-4">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h1 className="display-5 mb-4">With great interest to the world<br/>Katalin Katt Kovács</h1>
                        <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nulla, rerum quisquam? 
                            Praesentium at quam accusamus voluptates 
                            ipsa nesciunt vitae repellat nulla? Esse vel doloribus possimus. 
                            Veniam reprehenderit numquam minus placeat.
                        </p>
                        <NavLink className="btn btn-outline-primary me-4" to="/contact" role="button">Let's start</NavLink>
                        <NavLink className="btn btn-primary" to="/about" role="button">More About me</NavLink>
                    </div>
                    {/* For Image */}
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <img src="./assets/images/katt.jpg" alt="Katt Kovacs" height="300px" width="300px" />
                    </div>
                </div>
            </section>
            <Gallery />
            <Service />
            <Contact />
        </div>
    )
}

export default Home
