import React from 'react'

import home from '../../../asset/picture/1.png'
import { Container,Button } from 'react-bootstrap'
import MainHeader from '../../main-header/MainHeader'
import './Home.css'

import HeroSection from '../hero-section/HeroSection'
const Home = () => {
    return (
        <div className='contant'>
            <MainHeader></MainHeader>
            <Container>

                <div className='home'>

                    <div className='text_area'>
                        <p>DISCOVER RESEARCH - </p>
                        <h1>A better learning future starts here</h1>

                        <div>
                            <Button variant="primary">Get A Quiet</Button>{' '}
                            <Button variant="secondary">See More</Button>{' '}
                        </div>
                    </div>

                    <div className='image_area'>
                        <img src={home} alt="Logo" />


                    </div>
                </div>
                <HeroSection></HeroSection>
            </Container>
        </div>
    )
}

export default Home