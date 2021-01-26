import React from 'react'

function GridItem({image}) {
    return (
        <div className="grid-item">
            <img src={image} alt="img-thumbnail"/>
        </div>
    )
}

export default GridItem
