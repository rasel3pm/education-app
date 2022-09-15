import React from 'react'
import '../hero-section/HeroSection.css'

import Postgraduate from '../../../asset/picture/Postgraduate.png'
import Engineering from '../../../asset/picture/Engineering.png'
import Accounting from '../../../asset/picture/Accounting.png'




const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className='item1'>
                <h3>Vivamus maximus</h3>
                <p>Lorem ipsum dolor sadipscing elitr, sed diam nonum</p><br></br>
                <ul>
                    <li>Nullam est</li>
                    <li> Mattis dictum nunc</li>
                </ul>
            </div>
            <div className='item'>
                <img src={Postgraduate} alt="ko"></img>
                <h4>Postgraduate</h4>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className='item'>
                <img src={Engineering} alt="kiui"></img>
                <h4>Engineering</h4>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className='item'>
                <img src={Accounting} alt="koius"></img>
                <h4>Accounting</h4>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    )
}

export default HeroSection