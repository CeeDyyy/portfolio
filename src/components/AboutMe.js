import React from 'react'
import "./AboutMe.css"
import SET from '../Set'

function AboutMe() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/52788237_1287681174722359_5529166160420929536_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGNKsxLkTPQ5ux8ubVFWpl1vB8JsldfUQq8HwmyV19RCpyzpKksOUvWfZk1fv7j2MqLPMHvRLDtHw1PEUdW-o08&_nc_ohc=DCU5-vxZh70AX829CFa&_nc_ht=scontent.fbkk5-7.fna&oh=1416b8aff4ba7e8ded9407a023abff48&oe=61A90990" alt="" />
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