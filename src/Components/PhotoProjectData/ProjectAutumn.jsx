import React from 'react'
import GalleryComponent from '../GalleryComponent'
import DataAutumn from './DataAutumn'

const ProjectAutumn = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center grey-text py-4 mt-3">
                        <h4>Autumn Vibe</h4>
                        <p>Photo Project</p>
                        <GalleryComponent data={DataAutumn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectAutumn
