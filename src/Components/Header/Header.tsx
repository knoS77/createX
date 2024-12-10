import React, {useState} from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";



const Header:React.FC = () => {
const activeLink:string = 'activeLink normalLink';
const normalLink:string = 'normalLink';

const [isOpen, setOpen] = useState<Boolean>(false);


  return(
<header>
  <div onClick={(event):void => {
    if ((event.target as HTMLElement).closest('#burger')){
      setOpen(!isOpen)
      event.preventDefault();
      event.stopPropagation();
    } else if(!(event.target as HTMLElement).closest('#burger')){
      setOpen(false)
    }

  }} id="container" className="header__container">
    <div className="header__logo">
      Create<span>X</span>
    </div>
    <div className={`header__nav ${isOpen ? "active" : ""}`}>
      <ul className='nav__list'>
        <li>
          <NavLink to='*' className={({isActive}:any)=> isActive ? activeLink : normalLink}>            Home</NavLink>
        </li>
        <li>
          <NavLink to='/About'  className={({isActive}:any) => isActive ? activeLink : normalLink}>     About us</NavLink>
        </li>
        <li>
          <NavLink to='/news' className={({isActive}:any)=> isActive ? activeLink : normalLink}>          News</NavLink>
        </li>
        <li>
          <NavLink to='/contacts' className={({isActive}:any) => isActive ? activeLink : normalLink}> Contacts</NavLink> 
        </li>
      </ul>
    </div>
    <div id="burger" className="burger">
      <span></span>
    </div>
  </div>
</header>
  )
}


export default Header;