import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/video-2.mp4" autoPlay loop mmuted/>

            <h1>TEXT</h1>
            <p>Random text</p>

            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>

                 <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Watch <i className='far fa-play-circle'></i></Button>

            </div>
            
        </div>
    )
}

export default HeroSection
