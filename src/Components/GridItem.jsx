import React from 'react'

function GridItem({image}) {
    return (
        <div className="grid-item">
            <img src={image} alt="image"/>
        </div>
    )
}

export default GridItem
