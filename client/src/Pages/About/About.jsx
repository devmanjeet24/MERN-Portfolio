import React from 'react'
import './About.css';

const About = () => {
  return (
    <>
        <div className="About" id='about'>
            <div className="row aboutframe">
                <div className="col-md-5 col-xl-5 col-lg-5 col-xs-12 About-img">
                    <img src="../../../public/Images/ManjeetSingh.jpg" alt="" />
                </div>

                <div className="col-md-7 about-content">
                  <h2>About Me</h2>
                  <p>Hi, I’m Manjeet Singh, a passionate Full-stack Developer and Web Designer with 1.5 years of freelance experience in creating modern and responsive interfaces using HTML, CSS, JavaScript, and Figma. I love turning design ideas into smooth, interactive, and user-friendly web experiences. 
                    <br />

                    Over the past few years, I’ve worked on multiple projects — from restaurant and doctor websites to eCommerce and full-stack applications. My focus is always on crafting clean, maintainable code and delivering pixel-perfect designs that perform beautifully on every device.

                    <br />

                    I enjoy learning new tools and frameworks like React.js, Next.js, Node.js, and MongoDB, constantly improving my skills to stay up to date with the latest trends. My long-term goal is to become a Full Stack Developer and contribute to impactful digital solutions that make people’s lives easier.
                  </p>


             
                </div>
            </div>
        </div>
    </>
  )
}

export default About;