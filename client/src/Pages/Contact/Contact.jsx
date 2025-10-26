import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ou8f17j', 'template_fw3isxv', form.current, {
                publicKey: 'v4z7Xe8nIT8lrPapi',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                      alert('Message sent successfully ✅');
                      form.current.reset(); // 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className="container" id='contacts'>
                <div className="contact">
                    <div className="card card0 border-0">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12">

                                <div className="card1">
                                    <div className="row border-line d-flex align-items-center justify-content-center">
                                        <img src="../../../Images/contactn.jpg" alt="" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 col=lg-6 col-sm-12">

                                <div className="card2 d-flex card border-0 px-2 py-5">
                                    <div className="row">
                                        <div className="row">
                                            <h6 className='headcontact'>Contact with
                                               <a href="https://www.linkedin.com/in/devmanjeet/"> <FaLinkedin color='blue' className='ms-2' size={28} /></a>
                                              <a href="https://github.com/devmanjeet24"> <FaGithub color='black' className='ms-2' size={28} /></a>
                                            </h6>


                                        </div>

                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className='or text-center'>OR</small>
                                            <div className="line" />

                                        </div>

                                        <form action="" ref={form} onSubmit={sendEmail}>

                                            <div className="row px-3">
                                                <input type="text" name='name' placeholder='write your name' className='mb-3' />
                                            </div>

                                            <div className="row px-3">
                                                <input type="email" name='email' placeholder='write your email' className='mb-3' />
                                            </div>

                                            <div className="row px-3">
                                                <textarea type="text" name='message' placeholder='write your ' className='mb-3' />
                                            </div>

                                            <div className="row px-3">
                                                <button className='btn1 button' type='submit'>Send</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;