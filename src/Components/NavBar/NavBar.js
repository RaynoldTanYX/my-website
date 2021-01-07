import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavBarData } from './NavBarData';
import './NavBar.css';

function NavBar() {
    const [showNavBar, setShowNavBar] = useState(false)
    const enableNavBar = () => setShowNavBar(true);
    const disableNavBar = () => setShowNavBar(false);

    return (
        <>
        <div className={showNavBar ? 'overlay' : 'overlay disabled'} onClick={disableNavBar}> </div>
        <div className = 'navbar'>
            <Link to='#' className='menu-bars'>
                <MenuIcon onClick={enableNavBar}/>
            </Link>
            {/* <Link to='/' onClick={disableNavBar}> */}
            <a href="/" className='headerimage'>
                <img src={require('../../images/logo512.png')} className='headerimage' alt='Logo'/>
            </a>
            {/* </Link> */}
            {/* <h1 className='headertext'>Raynold Tan</h1> */}
        </div>
        <nav className={showNavBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <CloseIcon onClick={disableNavBar}/>
                    </Link>
                </li>
                {NavBarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path} onClick={disableNavBar}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </>
    );
}

export default NavBar;
