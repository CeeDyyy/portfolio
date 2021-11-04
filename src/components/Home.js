import React, { useEffect, useRef } from "react";
import "./Home.css"
import { init } from 'ityped'

function Home() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Welcome to my Portfolio!", "Video Editing", "Motion Graphics"]
        })
    }, []);

    return (
        <div className="home">
            <div className="bg">
                <div className="intro">
                    <div className="container-xl">
                        <h1>THANAWAT<br />UDCHACHON</h1>
                        <h2><hr /></h2>
                        <h3><span ref={textRef}></span></h3>
                        <a href="#AboutMe">
                            <button className="btn-view mt-4">View my Portfolio</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home