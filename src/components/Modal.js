import React, { useState } from "react";
import "./Modal.css"
import Card from './Card'

function Modal(props) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                {/* <button className="btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
                <Card
                    img={props.img}
                    title={props.title}
                    description={props.description}
                    date={props.date}
                />
            </button>

            {modal && (
                <div className="modal-modal">
                    <div onClick={toggleModal} className="modal-overlay"></div>
                    {/* <div className="modal-content center">
                        <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <h2>{props.title}</h2>
                        <div class="modal-body">
                            <p>{props.description}</p>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            x
                        </button>
                    </div> */}
                    <div className="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex justify-content-center">
                                    <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <br />
                                <div className="modal-body">
                                    <h6 className="date pb-2">{props.date.day} {monthNames[Number(props.date.month) - 1]} {props.date.year}</h6>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center">
                                <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <br />
                            <div className="modal-body">
                                <p>{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Modal