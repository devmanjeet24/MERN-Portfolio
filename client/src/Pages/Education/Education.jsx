import './Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdCastForEducation } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';


const Education = () => {
    return (
        <>
            <div className="container education" id='education'>
                <h2 className='col-12 mt-3 mb-1 text-center'>Top Recents Projects</h2>
                <hr />
                <p className='text-center pb-3'>👉 A showcase of my latest work and innovations.</p>

                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#eee', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  gray' }}
                        date="2017 - 2018"
                        iconStyle={{ background: '#eee', color: '#138781' }}
                        icon={<MdCastForEducation  />}
                    >
                        <h3 className="vertical-timeline-element-title classedu">12th</h3>
                        <h4 className="vertical-timeline-element-subtitle schooledu">UP Board of Intermediate</h4>
                       
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#eee', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  gray' }}
                        date="2021 - 2024"
                        iconStyle={{ background: '#eee', color: '#138781' }}
                        icon={<MdCastForEducation  />}
                    >
                        <h3 className="vertical-timeline-element-title classedu">BCA</h3>
                        <h4 className="vertical-timeline-element-subtitle schooledu">Subharti University</h4>
                       
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#eee', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  gray' }}
                        date="2025 - present"
                        iconStyle={{ background: '#eee', color: '#138781' }}
                        icon={<MdCastForEducation  />}
                    >
                        <h3 className="vertical-timeline-element-title classedu">MCA</h3>
                        <h4 className="vertical-timeline-element-subtitle schooledu">Mangalayatan University</h4>
                       
                    </VerticalTimelineElement>


                   

                </VerticalTimeline>

            </div>
        </>
    )
}

export default Education