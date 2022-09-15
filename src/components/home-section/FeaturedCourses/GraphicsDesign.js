import React from 'react'

import { Card } from 'react-bootstrap';
import one from '../../../asset/picture/5.png'
import './featured.css'

const GraphicsDesign = () => {
    return (
        <div>
            <div className='items'>
                <div>
                    <Card>
                        <Card.Img variant="top" className='on' src={one} alt="ko"/>
                        <Card.Body>
                            <Card.Title><a href='#'>Fox nymphs grab quick-jived waltz. Brick quiz whangs</a></Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <div className='price_ratting'>
                            <div>Ratting</div>
                            <div><strong>100$</strong></div>
                        </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div>
                    <Card>
                        <Card.Img variant="top" src={one} />
                        <Card.Body>
                        <Card.Title><a href='#'>Fox nymphs grab quick-jived waltz. Brick quiz whangs</a></Card.Title>

                        </Card.Body>
                        <Card.Footer>
                        <div className='price_ratting'>
                            <div>Ratting</div>
                            <div><strong>100$</strong></div>
                        </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div>
                    <Card>
                        <Card.Img variant="top" src={one} />
                        <Card.Body>
                        <Card.Title><a href='#'>Fox nymphs grab quick-jived waltz. Brick quiz whangs</a></Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <div className='price_ratting'>
                            <div>Ratting</div>
                            <div><strong>100$</strong></div>
                        </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default GraphicsDesign
