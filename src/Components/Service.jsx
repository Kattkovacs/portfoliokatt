import React from 'react'
import DATA from './Data'
import { NavLink } from 'react-router-dom'

const Service = () => {
    const card = (props) => {
        return (
            <div className="col-md-4 mb-5 pb-5 body grey-text" key={props.id}>
                <NavLink className="nav-link d-flex justify-content-center align-items-center" to={props.link}>
                    <div className="card card-service text-center py-5 d-flex justify-content-center align-items-center">
                        <img src={props.img} className="card-img-top mx-auto" alt={props.title} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
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
                        <div className="col-12 text-center grey-text mb-5 py-4 mt-3">
                            <div></div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {DATA.map(card)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service
