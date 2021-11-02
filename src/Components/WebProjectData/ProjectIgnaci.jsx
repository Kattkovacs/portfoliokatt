import React from 'react'
import GalleryComponent from '../GalleryComponent'
import dataIgnaci from './DataIgnaci'

const ProjectIgnaci = () => {
    return (
        <div>
            <div className="container">
                    <div className="row">
                        <div className="col-12 text-center grey-text py-4 mt-3">
                            <h4>Ignacipedagogia.hu website</h4>
                            <p>WordPress site</p>
                            <a href="https://ignacipedagogia.hu/">ignacipedagogia.hu</a>
                            <GalleryComponent data={dataIgnaci} componentId="2" />
                         </div>
                    </div>
                </div>
        </div>
    )
}

export default ProjectIgnaci
