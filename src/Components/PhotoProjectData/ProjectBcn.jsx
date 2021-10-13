import React from 'react'
import GalleryComponent from '../GalleryComponent'
import dataBcn from './DataBcn'

const ProjectBcn = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center grey-text py-4 mt-3">
                        <h4>Barcelona Lights & Shapes</h4>
                        <p>BCN - Spain</p>
                        <GalleryComponent data={dataBcn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBcn
