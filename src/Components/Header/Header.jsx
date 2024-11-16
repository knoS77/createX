import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    const activelink = 'activeLink';
    const normalLink = 'normalLink';

    // burger menu
    const changeMenu = (event) => {
        if(event.target.closest('.burger')){
            document.getElementById('burger').classList.toggle('active');
            document.getElementById('nav').classList.toggle('open');
            } 
            if (!event.target.closest('.burger')){
            document.getElementById('burger').classList.remove('active');
            document.getElementById('nav').classList.remove('open');
            }
    }
    
    return(
<>
        <header>
        <div onClick={changeMenu} className="header__container">

            <div className="header__logo">
            <NavLink to='/'>create<span>x</span> </NavLink>  
            </div>
            <div className="header__navigation">
                    <ul id="nav" className='nav'>
                        <li> <NavLink className={({isActive}) => isActive ? activelink : normalLink} to="*">Home</NavLink>             </li> 
                        <li> <NavLink className={({isActive}) => isActive ? activelink : normalLink} to="/about">About us</NavLink>     </li>
                        <li> <NavLink className={({isActive}) => isActive ? activelink : normalLink} to="/news">News</NavLink> </li>
                        <li> <NavLink className={({isActive}) => isActive ? activelink : normalLink} to="/contacts">Contacts</NavLink>   </li>
                    </ul>            
            </div>
            <div  id="burger" className="burger">
                <span></span>
            </div>
        </div>
        </header>
</>
    )
}

export default Header;