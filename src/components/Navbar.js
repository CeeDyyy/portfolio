import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
                <a className="navbar-brand" href="#">CeeDy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#AboutMe">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Portfolio">Porfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
