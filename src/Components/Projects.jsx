import React from 'react';
import dataExclusive from './DataExclusive';
import dataBarat from './DataBarat';
import { NavLink } from 'react-router-dom'

const Projects = () => {
const images = [ ...dataExclusive, ...dataBarat ]

    const card = (props) => {
        return (
            <div className="col-md-4 mb-5  pb-5" key={props.id}>
                <NavLink className="nav-link" to={props.link}>
                    <div className="card card-project text-center py-5 d-flex justify-content-center align-items-center crop">
                        <div className="card-body">
                            <img src={props.imageName} className="card-img-top mx-auto" alt={props.title} />
                            <h5 className="card-title">{props.galleryName}</h5>
                            <p className="card-text">{props.type}</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    }
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center grey-text py-4 mb-5 mt-3">
                            <div></div>
                            <h4>Projects</h4>
                        </div>
                        <div className="container">
                            <div className="row">
                                {images.filter(p => (p.type.length > 0) ? card : '').map(card)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Projects
