import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
const Footer:React.FC = () => {


    return(
        <footer className="footer">
            <div className="footer__container">
            <div className="footer__content">
                <div className="footer__title">
                    CREATE<span>X</span>
                </div>
                <div className="footer__subTitle">
                Createx Construction Bureau has been successfully operating in`the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.
                </div>
            
                <div className="footer__block">
                    <div className="block__title">
                        HEAD OFFICE
                    </div>
                    <div className="block__address">
                        <p>Address: <span>8502 Preston Rd. Inglewood, New York</span>  </p>
                        <p>Call: <span>+7-(996)-681-93-67</span>  </p>
                        <p>Email: <span>sloyan00.00@mail.ru</span>  </p>
                    </div>
                </div>
                </div>
            <div className="footer__block-about">
                <div className="block__about-title">
                WHO WE ARE
                </div>
                <div className="about__link">
                  <p>  <Link to='*'>Home</Link> </p>
                  <p>  <Link to='/about'>About us</Link> </p>
                  <p>  <Link to='/news'>News</Link> </p>
                  <p>  <Link to='/contacts'>Contacts</Link> </p>
                </div>
            </div>
        </div>
        
        </footer>
    )
}

export default Footer;