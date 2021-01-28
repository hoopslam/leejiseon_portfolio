import React from 'react'

function GridItem({image, description}) {
    return (
        <div className="grid-item">
            <img src={image} alt="img-thumbnail"/>
            <div className="grid-item-overlay">
                <div className="grid-item-overlay-text">{description}</div>
            </div>
        </div>
    )
}

export default GridItem
