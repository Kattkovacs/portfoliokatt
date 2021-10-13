import React from 'react'
import GalleryComponent from '../GalleryComponent'
import dataBarat from './DataBarat'

const ProjectBarat = () => {
    return (
        <div>
            <div className="container">
                    <div className="row">
                        <div className="tags">
                            <h4>House History Exhibition</h4>
                            <p>Budapest100 - "In the Footsteps of Bauhaus" - Barát utca - Budapest</p>
                            <GalleryComponent data={dataBarat} componentId="2" />
                         </div>
                    </div>
                </div>
        </div>
    )
}

export default ProjectBarat
