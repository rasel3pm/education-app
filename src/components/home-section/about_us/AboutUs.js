import React from 'react'

import student from '../../../asset/picture/student.jpg'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../about_us/aboutUs.css'
const AboutUs = () => {
    return (
        <div className='about_us my-5'>
            <Container>
                <div className='inner_about_us'>
                    <div className='about_us_img'>
                        <img src={student} alt="student" />
                    </div>
                    <div className='about_us_text'>
                        <p>ABOUT US - </p>
                        <h1>Strength in Numbers</h1>
                        <p className='para'>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,</p>

                        <div className='about_us_text_list pt-2'>
                            <div className='Ligula_molestie'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='faCheck' icon={faCheck} />
                                </div>
                                <div>
                                    <h3>Ligula molestie</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
                                </div>

                            </div>

                            <div className='Ligula_molestie'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='faCheck' icon={faCheck} />
                                </div>
                                <div>
                                    <h3>Ligula molestie</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default AboutUs
