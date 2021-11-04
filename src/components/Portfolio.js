import React from 'react'
import "./Portfolio.css"
import Modal from './Modal'
import WorkData from '../data/works.json'
import SET from '../Set'

// const oldest = Object.keys(WorkData).slice(0,5)
// const newest = Object.keys(WorkData).reverse()
const items = SET.sequence
function Work() {
    return (
        <div className="container">
            <div className="portfolio-text">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {items.map(key => (
                    <div className="col" id={key}>
                        <Modal
                            title={WorkData[key].title}
                            description={WorkData[key].description}
                            url={WorkData[key].url}
                            img={WorkData[key].img}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work