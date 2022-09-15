import React from 'react'

import './featured.css'
import { Card } from 'react-bootstrap';
import one from '../../../asset/picture/9.png'
const AllFeatured = () => {
    return (
        <div className='items'>
            <div>
                <Card>
                    <Card.Img variant="top" src={one} />
                    <Card.Body>
                        <Card.Title><a href='#'>Praesent eu dolor eu orci vehicula euismod</a></Card.Title>
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
                    <Card.Title><a href='#'>Praesent eu dolor eu orci vehicula euismod</a></Card.Title>

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
                    <Card.Title><a href='#'>Praesent eu dolor eu orci vehicula euismod</a></Card.Title>
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
    )
}

export default AllFeatured
