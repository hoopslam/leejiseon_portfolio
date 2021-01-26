import React from 'react'
import GridItem from './GridItem'
import Hero from './Hero'
import img1 from '../image/img1.jpg'
import img2 from '../image/img2.jpg'

function Home() {
    return (
        <div>
            <Hero />
            <div className="grid-container">
                <div className="grid">
                    <GridItem image={img1}/>
                    <GridItem image={img2}/>
                    <GridItem image={img1}/>
                    <GridItem image={img2}/>
                    <GridItem image={img1}/>
                    <GridItem image={img2}/>
                    <GridItem image={img1}/>
                    <GridItem image={img2}/>
                    <GridItem image={img1}/>
                </div>
            </div>
        </div>
    )
}

export default Home