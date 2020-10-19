import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                       Site
                   </Link>

                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'}  />  {/* switch from burger to x */}
                   </div>

                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className="nav-item">
                       <Link to='/home' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                   </li>
                   <li className="nav-item">
                       <Link to='/services' className="nav-links" onClick={closeMobileMenu}>About</Link>
                   </li>
                   <li className="nav-item">
                       <Link to='/social' className="nav-links" onClick={closeMobileMenu}>Social</Link>
                   </li>
                   <li className="nav-item">
                       <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
                   </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
               </div>
           </nav>
        </>
    )
}

export default Navbar
