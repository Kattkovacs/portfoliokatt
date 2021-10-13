import React from 'react'
import GalleryComponent from '../GalleryComponent'
import dataGrund from './DataGrund'

const ProjectGrundImpro = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center grey-text py-4 mt-3">
                        <h4>Grund Theater</h4>
                        <p>'SŐT' - Improvisational theater performance - Budapest</p>
                        <GalleryComponent data={dataGrund} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectGrundImpro
