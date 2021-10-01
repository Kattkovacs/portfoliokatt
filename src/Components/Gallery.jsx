import React from 'react'
import { NavLink } from 'react-router-dom'

const Gallery = () => {
    return (
        <div>
            <section className="container my-5 py-4">
                <div class="row">
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <NavLink className="nav-link" to="./contact">
                                <img src="./assets/images/nyugati.jpg" alt="nyugati-station" height="300px" width="300px" />
                                <div class="caption">
                                    <p class="card-text">Lorem ipsum...</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <NavLink className="nav-link" to="./contact">
                                <img src="./assets/images/teakwood.jpg" alt="teakwood-diner" height="300px" width="300px" />
                                <div class="caption">
                                    <p class="card-text">Lorem ipsum...</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <NavLink className="nav-link" to="./contact">
                                <img src="./assets/images/istvantelek.jpg" alt="istvantelek" height="300px" width="300px" />
                                <div class="caption">
                                    <p class="card-text">Lorem ipsum...</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
