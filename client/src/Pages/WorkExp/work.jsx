import React from 'react'
import './work.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";

const Workexp = () => {
    return (
        <>

            <div className=" work" id='workexp'>
                <div className="container ">
                    <div className='work-exp'>
                        <h2 className='col-12 mt-3 mb-1 text-center'>My Experience</h2>
                        <hr />
                        <p className='text-center pb-3'>👉 A showcase of my latest work and innovations.</p>

                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2023 - 2024"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<MdOutlineWork  />}
                            >
                                <h3 className="vertical-timeline-element-title">Freelancer Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">AlgosoftApps Technology</h4>
                                {/* <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p> */}
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2024 - Present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<MdOutlineWork  />}
                            >
                                <h3 className="vertical-timeline-element-title">Technical support</h3>
                                <h4 className="vertical-timeline-element-subtitle">Concentrix</h4>
                                {/* <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p> */}
                            </VerticalTimelineElement>
                        </VerticalTimeline>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Workexp;