import React, { useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

const GalleryComponent = ({ data }) => {
    let images = data;
    images = [];
    images = data;
    const [tag, setTag] = useState('All');
    const [filteredImages, setFilteredImages] = useState([]);
    // debugger;
    useEffect(
        () => {
            tag === 'All' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
        },
        [tag, images]
    );

    const TagButton = ({ name, handleSetTag, tagActive }) => {
        return (
            <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
                {name}
            </button>
        );
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="tags">
                        <TagButton name="All" tagActive={tag === 'All' ? true : false} handleSetTag={setTag} /> |
                        <TagButton name="Covers" tagActive={tag === 'Covers' ? true : false} handleSetTag={setTag} /> |
                        <TagButton name="Brochure pages" tagActive={tag === 'Brochure pages' ? true : false} handleSetTag={setTag} />
                    </div>
                    <SRLWrapper>
                        <div className="cont">
                            {filteredImages.map(image => 
                                <div key={image.id} className="image-card">
                                    <a href={`${image.imageName}`} >
                                        <img className="image" src={`${image.imageName}`} alt="" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </SRLWrapper>
                    <br />
                </div>
            </div>
            <div className="mb-5"></div>
        </div>
    )
}

export default GalleryComponent
