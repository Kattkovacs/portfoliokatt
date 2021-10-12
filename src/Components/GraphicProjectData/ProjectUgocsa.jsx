import React from 'react'
import GalleryComponent from './GalleryComponent'
import dataUgocsa from './DataUgocsa'

const ProjectUgocsa = () => {
    return (
        <div>
            <div className="container">
                    <div className="row">
                        <div className="tags">
                            <h4>House History Exhibition</h4>
                            <p>Budapest100 - "Redesign" - Ugocsa utca 2. - Budapest</p>
                            <GalleryComponent data={dataUgocsa} componentId="2" />
                         </div>
                    </div>
                </div>
        </div>
    )
}

export default ProjectUgocsa
