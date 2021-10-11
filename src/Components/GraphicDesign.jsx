// import React, { useEffect, useState } from 'react';
// import { SRLWrapper } from 'simple-react-lightbox';
import React from 'react';
import GalleryComponent from './GalleryComponent';
import dataExclusive from './DataExclusive';
import dataBarat from './DataBarat';

const GraphicDesign = () => {
    // const options = {
    //     // settings: {
    //     // 	overlayColor: 'rgb(25, 136, 124)',
    //     // 	autoplaySpeed: 1500,
    //     // 	transitionSpeed: 900
    //     // },
    //     // buttons: {
    //     // 	backgroundColor: 'red',
    //     // 	iconColor: 'rgba(126, 172, 139, 0.8)'
    //     // },
    //     // caption: {
    //     // 	captionColor: '#a6cfa5',
    //     // 	captionFontFamily: 'Raleway, sans-serif',
    //     // 	captionFontWeight: '300',
    //     // 	captionTextTransform: 'uppercase'
    //     // },
    //     // progressBar: {
    //     // 	height: '20px',
    //     // 	fillColor: 'blue',
    //     // 	backgroundColor: 'white'
    //     // }
    // };

    // const [tag, setTag] = useState('All');
    // const [filteredImages, setFilteredImages] = useState([]);

    // useEffect(
    //     () => {
    //         tag === 'All' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    //     },
    //     [tag]
    // );

    // const TagButton = ({ name, handleSetTag, tagActive }) => {
    //     return (
    //         <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
    //             {name}
    //         </button>
    //     );
    // };

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
                <div className="container">
                    <div className="row">
                        <div className="tags">
                            <h4>Exclusive Trains Brochure</h4>
                            <p>MÁV Nostalgia - Presentation Publication</p>
                            <GalleryComponent data={dataExclusive} componentId="1" />
                         </div>
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="tags">
                            <h4>House History Exhibition</h4>
                            <p>Budapest100 - "In the Footsteps of Bauhaus" - Barát utca - Budapest</p>
                            <GalleryComponent data={dataBarat} componentId="2" />
                        </div>
                    </div>
                </div>
            {/* <div className="container">
                    <div className="row">
                        <div className="tags">
                            <h4>Exclusive Trains Brochure</h4>
                            <p>MÁV Nostalgia - Presentation Publication</p>
                            <TagButton name="All" tagActive={tag === 'All' ? true : false} handleSetTag={setTag} /> |
                            <TagButton name="Covers" tagActive={tag === 'Covers' ? true : false} handleSetTag={setTag} /> |
                            <TagButton name="Brochure pages" tagActive={tag === 'Brochure pages' ? true : false} handleSetTag={setTag} />
                        </div>
                        <SRLWrapper options={options}>
                            <div className="cont">
                                {filteredImages.map(image => image.galleryName === 'Exclusive Trains' ? (
                                    <div key={image.id} className="image-card">
                                        <a href={`${image.imageName}`}>
                                            <img className="image" src={`${image.imageName}`} alt="" />
                                        </a>
                                    </div>
                                ) : (
                                    <div></div>
                                ))}
                            </div>
                        </SRLWrapper>
                        <br />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="tags">
                            <h4>House History Exhibition</h4>
                            <p>Budapest100 - "In the Footsteps of Bauhaus" - Barát utca - Budapest</p>
                            <TagButton name="All" tagActive={tag === 'All' ? true : false} handleSetTag={setTag} /> |
                            <TagButton name="Covers" tagActive={tag === 'Covers' ? true : false} handleSetTag={setTag} /> |
                            <TagButton name="Brochure pages" tagActive={tag === 'Brochure pages' ? true : false} handleSetTag={setTag} />
                        </div>
                        <SRLWrapper options={options}>
                            <div className="cont">
                                {filteredImages.map(image => image.galleryName === 'Budapest100 "In the Footsteps of Bauhaus"' ? (
                                    <div key={image.id} className="image-card">
                                        <a href={`${image.imageName}`}>
                                            <img className="image" src={`${image.imageName}`} alt="" />
                                        </a>
                                    </div>
                                ) : (
                                    <div></div>
                                ))}
                            </div>
                        </SRLWrapper>
                    </div>
                </div> */}
                </div>
                <div className="mb-5"></div>
            </section>
        </div>
    )
}

export default GraphicDesign
