import React from "react";
import "../Styles/About.css";

// about 
import materialBlockOne from "../Img/sc 1 aboutOne.svg";
import materialBlockTwo from "../Img/sc1 aboutTwo.svg";
import materialBlockThree from "../Img/sc1 aboutThree.svg";
import materialBlockFour from "../Img/sc1 aboutFour.svg";

// author
import author from "../Img/picture author.jpg";
import signature from "../Img/picture author signature.svg";

const About = () => {
    const materials = [
        {id: 1, img: materialBlockOne, title: '60%', subTitle: 'Clients on`the recommendation of`friends'},
        {id: 2, img: materialBlockTwo, title: '2400+', subTitle: 'Apartments renovated'},
        {id: 3, img: materialBlockThree, title: '670', subTitle: 'Qualified specialists'},
        {id: 4, img: materialBlockFour, title: '150000+ m2', subTitle: 'Finishing work was carried out'},

    ]
    return(
        <main className="main">
            <div className="about">
            <div className="about__container">
                <h3 className="about__title">About us</h3>
            <div className="about__text">
            Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.
            </div>
            </div>
            </div>

            <section className="material">
                <div className="materials__title title">
                    Materials
                </div>
                <div className="material__container">
                    {materials.map((material) => (
                        <div key={material.id} className="materials__block">
                            <img src={material.img} alt="" />
                            <div className="materials__block-title">
                                {material.title}
                            </div>
                            <div className="materials__block-subTitle">
                                {material.subTitle}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="author">
                    <div className="author__container">
                        <div className="author__picture">
                            <img src={author} alt="" />
                        </div>
                        <div className="author__biography">
                            <div className="author__biography-text">
                            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra. <br /> <br />
                            Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer. 
                            </div>

                            <div className="author__biography-name">
                            Courtney Alexander
                            </div>
                            <div className="author__biography-company">
                            CEO - Createx Construction Bureau 
                            <div className="authir__biography-signature">
                                <img src={signature} alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
            </section>

        </main>
    )
}

export default About;