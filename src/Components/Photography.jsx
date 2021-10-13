import '../App.css'
import Projects from './Projects'
import dataBcn from './PhotoProjectData/DataBcn'
import dataGrund from './PhotoProjectData/DataGrund'


const Photography = () => {
    const imageDatas = [...dataBcn, ...dataGrund]
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center grey-text py-4 mt-3">
                            <div></div>
                            <h4>Photography</h4>
                        </div>
                    </div>
                <div >
                </div>
                    <Projects imageData={imageDatas}/>
                </div>
                <div className="mb-5"></div>
            </section>
        </div>
    )

}

export default Photography
