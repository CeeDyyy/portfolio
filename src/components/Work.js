import React from 'react'
import "./Work.css"
import Modal from './Modal'

function Work() {
    return (
        <div className="container">
            <div className="work-text">
                <h1>WORK</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <Modal
                        img="https://img.youtube.com/vi/pxMvtyBELxQ/sddefault.jpg"
                        title="Smart Home - Youth Leadership for Smart Energy in Thailand"
                        description="This video is an interview of the many students in King Mongkut's University of Technology Thonburi, Creators of a sustainable energy technology which they map them together into a Smart home system. As for my positions in this project, I edited and made all of the motion graphics seen in this video. I've also shot some parts of the interview."
                        url="https://www.youtube-nocookie.com/embed/pxMvtyBELxQ"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://img.youtube.com/vi/xBbYbl4wmy4/sddefault.jpg"
                        title="Trendy Eco Products and Design from used Meterials in Thailand - Ecotopia"
                        description="This video is an interview of Dr. Singh, The owner of the high quality and trendy Eco Products at Ecotopia and Mr.Pornthep, a product designer to interviewand discuss about the insight regarding about the eco products market. and as for my jobs, I edited all of the interview including making the Intro, and i have shot some of the parts."
                        url="https://www.youtube-nocookie.com/embed/xBbYbl4wmy4"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://img.youtube.com/vi/gUHn6o1og_0/sddefault.jpg"
                        title="Sustain Organic Dairy farm in Thailand - Dairy Home"
                        description="This video is an interview of Mr.Pruitt, The founder of Thailand's first organic milk farm, Dairy Home. to discuss about how he believes everyone should turn to organic farming of dairy products. I myself handled the editing process of the whole interview including making the Intro, I've also shot some parts of the video."
                        url="https://www.youtube-nocookie.com/embed/gUHn6o1og_0"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://img.youtube.com/vi/fcG_4GN9seY/sddefault.jpg"
                        title="Sustainability Business Features 2020 | Start-ups Towards Sustainability"
                        description="This video is an interview of the up and coming Start-ups at Towards Sustainability, I handled all of the editing process of the video."
                        url="https://www.youtube-nocookie.com/embed/fcG_4GN9seY"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://drive.google.com/thumbnail?id=1iBn93JLDpW94WoreaEm9g8SPH_nTbcDx"
                        title="Pre-IT#26 Starter Pack - Educational Video Intro"
                        description="This is an Intro of the first year freshmen videos in the bootcamp, I myself animated the said Intro."
                        url="https://drive.google.com/file/d/1iBn93JLDpW94WoreaEm9g8SPH_nTbcDx/preview"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://drive.google.com/thumbnail?id=1NVTn5oyhahXhO4Yxwxm4VQ0qIMGiitg4"
                        title="Pre-IT#26 Starter Pack - Waiting... Looping Video"
                        description="This video is made specifically as a loop for waiting for the freshmen first year, The loop animation was done by me."
                        url="https://drive.google.com/file/d/1NVTn5oyhahXhO4Yxwxm4VQ0qIMGiitg4/preview"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://drive.google.com/thumbnail?id=1esxfLyYsCwSddI8i7x_gD3LWxa8mxQ0X"
                        title="WebTech Ep.1: Website & HTML | เริ่มต้นเขียนเว็บด้วยการเขียน HTML พื้นฐาน"
                        description="This video is an instructional video intend to teach and introduce First-year students to writing elementary HTML websites, I've edited and dubbed in some parts of this video."
                        url="https://drive.google.com/file/d/1esxfLyYsCwSddI8i7x_gD3LWxa8mxQ0X/preview"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://drive.google.com/thumbnail?id=1lXy99hUmLEbsZkhSjgcuMQrPDTUxtXxx"
                        title="WebTech Ep.4: List & Table | รู้จักกับการสร้างรายการและการสร้างตารางด้วย HTML"
                        description="This video is an instructional video aimed to teach the First-year students about Creating List & Table with HTML, as for I, I've edited and dubbed in some parts of this video."
                        url="https://drive.google.com/file/d/1lXy99hUmLEbsZkhSjgcuMQrPDTUxtXxx/preview"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://drive.google.com/thumbnail?id=1ihcdFb7O8CNWBOote3WtcuItf_EmLgZt"
                        title="It's Me | Trailer (2020) | Beauty of Life (GEN - 241)"
                        description="This video is a trailer for The stage play &ldquo;It's Me&rdquo; which is a part of Beauty of Life (GEN - 241). I handled the writing process and storyboard. I also edited and color graded this video."
                        url="https://drive.google.com/file/d/1ihcdFb7O8CNWBOote3WtcuItf_EmLgZt/preview"
                    />
                </div>
                <div className="col">
                    <Modal
                        img="https://drive.google.com/thumbnail?id=1OvXdY9bre138xg_VjhOg0z-6Z_OJtDDm"
                        title="เทศกาลแห่งความรักของจีน - GEN 242 - Chinese Philosophy and Ways of Life"
                        description="This video is mainly about the chinese love festival, which is a part of Chinese Philosophy and Ways of Life (GEN - 242). as for me, I handled the making and level designing process using RPG Maker as a storytelling media. See more : https://drive.google.com/drive/folders/1g6EqPzPHpSD-c-6NB4fhdFeOonLVz4ne?usp=sharing"
                        url="https://drive.google.com/file/d/1OvXdY9bre138xg_VjhOg0z-6Z_OJtDDm/preview"
                    />
                </div>
            </div>
        </div>
    )
}

export default Work