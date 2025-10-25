import React from 'react'
import './Techstack.css';
import { Techstacklist } from '../../Utilities.tsx/TechstackList';

const Techstack = () => {
    return (
        <>
            <div className="container Techstack" id='techies'>
                <h2 className='col-12 mt-3 mb-1 text-center'>Technology Stack</h2>
                <hr />
                <p className='text-center pb-3'>👉 From frontend design to backend logic — here’s the stack I use to bring ideas to life.</p>



                <div className="row">
                    {
                        Techstacklist.map((index, key) => {
                            return (
                                <div className="col-md-3 col-6" key={key}>
                                    <div className="card m-2">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="media d-flex justify-content-center align-items-center">
                                                    <div className="align-self-center me-2">
                                                     <index.icon size={20} className='tech-icon'/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h5>{index.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Techstack;