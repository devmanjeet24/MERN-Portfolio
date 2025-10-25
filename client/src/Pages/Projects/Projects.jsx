import React from 'react'
import './Project.css'
import { projectData } from './Profiledata'

const Projects = () => {
  return (
    <>

      <div className="container projects" id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center'>Top Recents Projects</h2>
        <hr />
        <p className='text-center pb-3'>👉 A showcase of my latest work and innovations.</p>


        <div className="row" id='ads'>

          {
            projectData.map((ind, key) => {
              return (

                <div className="col-md-4 mb-4" key={key}>
                  <div className="card rounded">
                    <div className="card-image">
                      <span className='card-notify-badge'>
                        {ind.Based}
                      </span>
                      <img src={ind.Image} alt="Project1" />
                    </div>
                    <div className="card-image-overlay m-auto mt-3">
                      {/* <span className='card-detail-badge'>Node </span>
                      <span className='card-detail-badge'>Express </span>
                      <span className='card-detail-badge'>MongoDB </span>
                      <span className='card-detail-badge'>React </span> */}
                      {
                        ind.language.map((lang, id) => {
                          return(
                            <span className='card-detail-badge' key={id}>{lang} </span>
                          )
                        })
                      }
                    </div>

                    <div className="card-body text-center">
                      <div className="ad-title m-auto">
                        <h5 className='text-uppercase'>{ind.webname}</h5>
                      </div>

                      <a href={ind.link} className='ad-btn'>View</a>
                    </div>
                  </div>
                </div>

              )
            })
          }



          {/* <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className='card-notify-badge'>
                  Full stack
                </span>
                <img src="../../../Images/5779920.jpg" alt="Project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className='card-detail-badge'>Node </span>
                <span className='card-detail-badge'>Express </span>
                <span className='card-detail-badge'>MongoDB </span>
                <span className='card-detail-badge'>React </span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className='text-uppercase'>Techinfo Shopping App</h5>
                </div>

                <a href="#" className='ad-btn'>View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className='card-notify-badge'>
                  Full stack
                </span>
                <img src="../../../Images/5779920.jpg" alt="Project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className='card-detail-badge'>Node </span>
                <span className='card-detail-badge'>Express </span>
                <span className='card-detail-badge'>MongoDB </span>
                <span className='card-detail-badge'>React </span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className='text-uppercase'>Techinfo Shopping App</h5>
                </div>

                <a href="#" className='ad-btn'>View</a>
              </div>
            </div>
          </div> */}
        </div>

      </div>

    </>
  )
}

export default Projects;