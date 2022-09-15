import React from 'react'

import { Tabs, Tab, Container } from 'react-bootstrap';
import AllFeatured from './AllFeatured';
import './featured.css'
import GraphicsDesign from './GraphicsDesign';

const FeaturedCourses = () => {
    return (
        <div className='FeaturedCourses my-5'>
            <div className='inner_FeaturedCourses'>
                <Container>
                    <div>
                        <h1 className='text-center my-5'>Top Featured Courses</h1>
                    </div>
                    <Tabs
                        defaultActiveKey="All"
                        id="fill-tab-example"
                        className="mb-5 tab"
                        fill
                    >
                        <Tab eventKey="All" title="All">
                            <AllFeatured></AllFeatured>
                        </Tab>
                        <Tab eventKey="Graphics" title="Graphics Design">
                            <GraphicsDesign></GraphicsDesign>
                        </Tab>
                        <Tab eventKey="Digital" title="Digital Marketing">
                            <AllFeatured></AllFeatured>
                        </Tab>
                        <Tab eventKey="Writing" title="Writing Translation">
                            <GraphicsDesign></GraphicsDesign>
                        </Tab>
                        <Tab eventKey="Web" title="Web Development">
                            <AllFeatured></AllFeatured>
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </div>
    )
}

export default FeaturedCourses



