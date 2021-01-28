import React from 'react'
import GridItem from './GridItem'
import img1 from '../image/img1.gif'
import img2 from '../image/img2.gif'
import img3 from '../image/img3.gif'
import img4 from '../image/img4.gif'
import img5 from '../image/img5.gif'
import img6 from '../image/img6.gif'
import img7 from '../image/img7.gif'
import img8 from '../image/img8.gif'
import img9 from '../image/img9.gif'

function Home() {
    return (
            <div className="grid-container">
                <div className="grid">
                    <GridItem image={img1} description={"Jisun Jisun"}/>
                    <GridItem image={img2} description={"Jisun Jisun"}/>
                    <GridItem image={img3} description={"Jisun Jisun"}/>
                    <GridItem image={img4} description={"Jisun Jisun"}/>
                    <GridItem image={img5} description={"Jisun Jisun"}/>
                    <GridItem image={img6} description={"Jisun Jisun"}/>
                    <GridItem image={img7} description={"Jisun Jisun"}/>
                    <GridItem image={img8} description={"Jisun Jisun"}/>
                    <GridItem image={img9} description={"Jisun Jisun"}/>
                </div>
            </div>
    )
}

export default Home