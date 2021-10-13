import React from 'react'
import GalleryComponent from '../GalleryComponent'
import dataExclusive from './DataExclusive'

const ProjectExclusive = () => {
    return (
        <div>
            <div className="container">
                    <div className="row">
                        <div className="tags">
                            <h4>Exclusive Trains Brochure</h4>
                            <p>MÁV Nostalgia - Presentation Publication</p>
                            <GalleryComponent data={dataExclusive} componentId="1" />
                         </div>
                    </div>
                </div>
        </div>
    )
}

export default ProjectExclusive
