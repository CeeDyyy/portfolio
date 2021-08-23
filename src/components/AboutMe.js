import React from 'react'
import "./AboutMe.css"
import SET from '../Set'

function AboutMe() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/52788237_1287681174722359_5529166160420929536_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=GdZ3_xexNYsAX-dwqSd&tn=s9iZSU-3TXm5mqAn&_nc_ht=scontent.fbkk5-7.fna&oh=638c71425481570f40be3cce9921ba65&oe=614A1D90" alt="" />
                </div>
                <div className="content-r">
                    <h2>ABOUT ME</h2>
                    <p>
                        {SET.aboutMe}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutMe