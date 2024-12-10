import React from "react";
import "../Styles/About.css"

type MaterialsBlockItem = {
    id: number,
    img: string,
    title: string,
    subTitle: string,
};

const MaterialsItem:MaterialsBlockItem[] = [
    {id: 1, img: '../Img/sc 1 aboutOne.svg', title: '60%', subTitle: 'Clients on`the recommendation of`friends'},
    {id: 2, img: '../Img/sc1 aboutTwo.svg', title: '2400+', subTitle: 'Apartments renovated'},
    {id: 3, img: '../Img/sc1 aboutThree.svg', title: '670', subTitle: 'Qualified specialists'},
    {id: 4, img: '../Img/sc1 aboutFour.svg', title: '150000+ m2', subTitle: 'Finishing work was carried out'},
];


type BenefitsBlockItem = {
    id: number,
    img: string,
    title: string,
    subTitle: string,
};

// import "../Img/sc3 block1 about.svg"

const BenefitsBlock: BenefitsBlockItem[] = [
    {id: 1, title: 'Training', img: '../Img/sc3 block1 about.svg', subTitle: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'},
    {id: 2, title: 'Professional Growth', img: '../Img/sc3 block2 about.svg', subTitle: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'},
    {id: 3, title: 'Growing Salary', img: '../Img/sc3 block3 about.svg', subTitle: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'},
];


const About:React.FC = () => {

    return(
        <main>
            <div className="about">
            <div className="about__container">
                <h3 className="about__title">About us</h3>
            <div className="about__text">
            Createx Construction Bureau has been successfully operating in`the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.
            </div>
            </div>
            </div>

        <section className="material">
            <div className="material__title title">
            Materials
            </div>
            <div className="material__container">
                {MaterialsItem.map((arr):React.ReactElement => 
                    <div key={arr.id} className="materials__block">
                        <img src={arr.img} alt={arr.title} />
                        <div className="materials__block-title">
                            {arr.title}
                        </div>
                        <div className="materials__block-subTitle">
                                {arr.subTitle}
                            </div>
                    </div>
                )}
            </div>
        </section>

        <section className="author">
        <div className="author__container">
                        <div className="author__picture">
                            <img src='../Img/picture author.jpg' alt="" />
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
                                <img src='../Img/picture author signature.svg' alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
        </section>

        <section className="benefits">
            <div className="benefits__title title">
            Employee benefits
            <p>There`s always room for talent.</p>
            </div>
            <div className="benefits__container">
                {BenefitsBlock.map((arr):React.ReactElement => 
                    <div key={arr.id} className="benefits__block">   
                        <img src={arr.img} alt="" />
                        <div className="benefits__block-title">
                            {arr.title}
                        </div>
                        <div className="benefits__block-subTitle">
                            {arr.subTitle}
                        </div>
                    </div>
                )}
            </div>
        </section>
        </main>
    )
}

export default About