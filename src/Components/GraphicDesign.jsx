import React from 'react'
import Projects from './Projects'
import dataExclusive from './GraphicProjectData/DataExclusive'
import dataBarat from './GraphicProjectData/DataBarat'
import dataUgocsa from './GraphicProjectData/DataUgocsa'

const GraphicDesign = () => {
    const imageDatas = [...dataExclusive, ...dataBarat, ...dataUgocsa]
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center grey-text py-4 mt-3">
                            <div></div>
                            <h4>Graphic Design</h4>
                        </div>
                    </div>
                </div>
                <div >
                    <Projects imageData={imageDatas} />
                </div>
                <div className="mb-5"></div>
            </section>
        </div>
    )
}

export default GraphicDesign
