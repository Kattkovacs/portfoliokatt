import React from 'react'

const About = () => {
    return (
        <div>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-4">
                            <h2>About</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto py-5 d-flex justify-content-center align-items-center">
                            <img src="./assets/images/katt.jpg" alt="Katt Kovacs" height="300px" width="300px" />
                        </div>
                        <div className="col-md-6 my-5">
                            <h2 className="display-5 mb-4">Katalin Katt Kovács</h2>
                            <p className="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nulla, rerum quisquam?
                                Praesentium at quam accusamus voluptates
                                ipsa nesciunt vitae repellat nulla? Esse vel doloribus possimus.
                                Veniam reprehenderit numquam minus placeat.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae ex voluptates. Excepturi, eveniet adipisci! Soluta nostrum tenetur corporis est. Assumenda veritatis fuga labore ipsam dignissimos, esse eveniet atque illo.
                            </p>
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
