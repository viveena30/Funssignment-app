import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from '../Buttons/Button';
import funssignmentLogo from '../Assets/Funssignment.png'
import profile from '../Assets/profile.png'


function Navbar() {

    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);    

    window.addEventListener('resize', showButton)

    // $("#toggle").click(function () {
    //     $(this).toggleClass("on");
    //     $("#menu").slideToggle();
    //   });
    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={funssignmentLogo} alt="" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/quizzes" className="nav-links" onClick={closeMobileMenu}>
                        Quizzes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn-outline'>SIGN UP</Button>} */}
            </div>
            <div className="profile-icon" >
                <img src={profile} alt="" id="toggle" />
{/* 
                <div id="menu">
                    mention logout option, profile option, settings, etc
                Hello, I'm a menu!
                </div> */}
            </div>
        </nav>
        </>
    )
}

export default Navbar
