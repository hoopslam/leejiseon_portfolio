import React from 'react'
import GridItem from './GridItem'
import hero from '../image/hero.gif'
import img1 from '../image/img1.jpg'
import img2 from '../image/img2.jpg'

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <img src={hero} alt="hero-img"/>
            </div>
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
    )
}

export default Home