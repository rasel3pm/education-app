
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Router } from 'react-router-dom'

import Home from './components/home-section/Home/Home';
import TopHeader from './components/top-header/TopHeader';
import AboutUs from './components/home-section/about_us/AboutUs';
import FeaturedCourses from './components/home-section/FeaturedCourses/FeaturedCourses';
import Count from './components/home-section/student-count/Count';
import How from './components/home-section/how-works/How';
function App() {
  return (
    <div className="App">
        <TopHeader></TopHeader>
        <Home></Home>

        <AboutUs></AboutUs>
        <FeaturedCourses></FeaturedCourses>
        <Count></Count>
        <How></How>





      {/* 
            <BrowserRouter>
              <Router>
                <Route path='/' element={<Home/>}></Route>
              </Router>
            </BrowserRouter> */}
    </div>
  );
}

export default App;
