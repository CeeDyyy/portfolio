import React from 'react'
import "./Card.css"

function Card(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="card h-100 text-center">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <h6 className="date pt-2">{props.date.day} {monthNames[Number(props.date.month) - 1]} {props.date.year}</h6>
            </div>
            <div className="card-overlay">
                <button className="hover-btn">View More</button>
            </div>
        </div>
    )
}

export default Card