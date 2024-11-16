import React from "react";
// import "../index.css"
import "../Styles/Home.css";
// values
import valueBlockOne from "../Img/sc1 block1.svg";
import valueBlockTwo from "../Img/sc1 block2.svg";
import valueBlockThree from "../Img/sc1 block3.svg";

// services
import servicesBlockOne from "../Img/sc2 block1.png";
import servicesBlockTwo from "../Img/sc2 block2.svg";
import servicesBlockThree from "../Img/sc2 block3.svg";
import servicesBlockFour from "../Img/sc2 block1.png";

// browser
import browseBlockOne from "../Img/sc3 block1.jpg";
import browseBlockTwo from "../Img/sc3 block2.png";
import browseBlockThree from "../Img/sc3 block3.png";


const Createx = () => {

    const valuesBlock = [
        {id: 1,img: valueBlockOne, title: 'Quality', subTitle: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'},
        {id: 2,img: valueBlockTwo, title: 'Safety', subTitle: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'},
        {id: 3,img: valueBlockThree, title: 'Comfort', subTitle: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'},
    ];

    const servicesBlock = [
        {id: 1, img: servicesBlockOne, title: 'Construction', },
        {id: 2, img: servicesBlockTwo, title: 'Project Development', },
      {id: 3, img: servicesBlockThree, title: 'Interior Design', },
       {id: 4, img: servicesBlockFour, title: 'Repairs', },
 

    ];

    const browseBlock = [
        {id: 1, img: browseBlockOne, title: 'Red Finger Building', subTitle: 'Business Centers'},
        {id: 2, img: browseBlockTwo, title: 'Cubes Building', subTitle: 'Business Centers'},
        {id: 3, img: browseBlockThree, title: 'The Pencil Building', subTitle: 'Stores & Mallsv'}
    ];


    return(
        <main className="main">
        <div className="create">
            <div className="crate__container">
            <div className="create__content">
                <h3 className="create__title">
                CREATE<span>X</span> CONSTRUCTION
                </h3>
                <div className="create__subTitle">
                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. 
                </div>
                <div className="create__button">
                    <button>
                    SUBMIT REQUEST
                    </button>
                </div>
                </div>
            </div>
        </div>

        <section className="values">
                <div className="values__title title">
                Our core values
                <p>Our mission is to set the highest standards for construction sphere.</p>
                </div>
            <div className="values__container">
                    {valuesBlock.map((value) =>(
                        <div key={value.id} className="values__block">
                        <img src={value.img} alt="" />
                        <div className="value__block-title">
                            {value.title}
                        </div>
                        <div className="value__block-subTitle">
                            {value.subTitle}
                        </div>
                        </div>
                    ))}
            </div>
        </section>

        <section className="services">
            <div className="services__title title">
                    Our services
            </div>
            <div className="services__container">
                {servicesBlock.map((servis) => (
                    <div className="services__block" key={servis.id}>
                        <img src={servis.img} alt="" />
                        <div className="services__block-title">
                            {servis.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
                
        <section className="browse">
            <div className="browse__title title">
            Browse our selected projects and learn more about our work
            </div>
            <div className="browse__container">
                {browseBlock.map((browse) => (
                    <div key={browse.id} className="browse__block">
                        <img src={browse.img} alt="" />
                        <div className="browse__block-title">
                            {browse.title}
                            <p className="browse__block-subTitle">
                                {browse.subTitle}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>    
       
           
        </main>
    )
}

export default Createx;