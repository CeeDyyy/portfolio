import React from 'react'
import "./Extra.css"
import SET from '../Set'

function CareerObj() {
    return (
        <div className="extra-bg">
            <div className="extra-overlay">
                <div className="container">
                    <div className="extra-con">
                        <div className="extra-text">
                            <h1>{SET.extraTitle}</h1>
                            <br />
                            <p>
                            {SET.extraInfo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerObj