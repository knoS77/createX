import React, {useState } from "react";

import Modal from "../Modal/Modal";
import "../Styles/Home.css";
// valueBlock
import valueBlockOne from "../Img/sc1 block1.svg";
import valueBlockTwo from "../Img/sc1 block2.svg";
import valueBlockThree from "../Img/sc1 block3.svg";

// Services
import servicBlockOne from "../Img/sc2 block1.png";
import servicBlockTwo from "../Img/sc2 block2.svg";
import servicBlockThree from "../Img/sc2 block3.svg";
import servicBlockFour from "../Img/sc2 block4.png";

// Browse
import browseBlockOne from "../Img/sc3 block1.jpg";
import browseBlockTwo from "../Img/sc3 block2.png";
import browseBlockThree from "../Img/sc3 block3.png";


type ValueBlockItems = {
    id: number,
    title: string,
    subTitle: string,
    img: any,
};
const ValueBlock:ValueBlockItems[] = [
    {id: 1, title: 'Quality', img: valueBlockOne,  subTitle: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'},
    {id: 2, title: 'Safety', img: valueBlockTwo, subTitle: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'},
    {id: 3, title: 'Comfort', img: valueBlockThree,  subTitle: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'},
];


type ServicesItem = {
    id: number,
    title: string,
    img: any,
};
const ServicesBlockItem:ServicesItem[] = [
    {id: 1, title: 'Construction', img: servicBlockOne},
    {id: 2, title: 'Project Development', img:servicBlockTwo},
    {id: 3, title: 'Interior Design', img:servicBlockThree},
    {id: 4, title: 'Repairs', img: servicBlockFour},
];

type BrowseItem = {
    id: number,
    img: any,
    title: string,
    subTitle: string,
};

const BrowseBlockItem:BrowseItem[] = [
    {id: 1, img: browseBlockOne, title: 'Red Finger Building', subTitle: 'Business Centers',},
    {id: 2, img: browseBlockTwo, title: 'Cubes Building', subTitle: 'Business Centers',},
    {id: 3, img: browseBlockThree, title: 'The Pencil Building', subTitle: 'Stores & Malls',},
];



const Home:React.FC = () => {
// Modal
const [showModal, setShowModal] = useState(false);
const closeModal = ():void => {
    setShowModal(false);
};

return(
<main>

<div className="create">
<div className="create__container">
            <div className="create__content">
                <h3 className="create__title">
                CREATE<span>X</span> CONSTRUCTION
                </h3>
                <div className="create__subTitle">
                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. 
                </div>
                <div className="create__button">
                <button onClick={() => setShowModal(true)} type="submit">
                    SUBMIT REQUEST
                </button>
           <Modal title="Submit Request" active={showModal} onClose={closeModal}>
                <div className="modal__name">Name*</div>
                <input maxLength={9} placeholder='Name' type="text" />
                <div className="modal__email">Email*</div>
                <input placeholder='Email' type="email" />
              </Modal> 
                
                </div>
                </div>        
</div>
</div>

<section id='one' className="values">
<div className="value__title title">
Our core values
<p>Our mission is to set the highest standards for construction sphere.</p>
</div>
<div className="values__container">
{ValueBlock.map((arr):React.ReactElement => 
<div className="values__block" key={arr.id}>
    <img src={arr.img} alt="" />
    <div className="value__block-title">
        <h3>
            {arr.title}
        </h3>
    </div>
    <div className="value__block-subTitle ">
        <h5>
            {arr.subTitle}
        </h5>
    </div>
</div>
)}
</div>
</section>

<section id="two" className="services">
    <div className="services__title title">
        Our services
        <p>Createx Construction Bureau is a construction giant with a full range of construction services.</p>
    </div>
    <div className="services__container">
        {ServicesBlockItem.map((arr):React.ReactElement => 
            <div key={arr.id} className="services__block">
                <img src={arr.img} alt={arr.title} />
                <div className="services__block-title">
                    {arr.title}
                </div>
            </div>
        )}
    </div>
</section>

<section id="three" className="browse">
    <div className="browse__title title">
    Browse our selected projects 
    and learn more about our work
    <div className="browse__container">
        {BrowseBlockItem.map((arr):React.ReactElement => 
            <div key={arr.id} className="browse__block">
                <img src={arr.img} alt="" />
                <div className="browse__block-title">
                    {arr.title}
                    <p>
                        {arr.subTitle}
                    </p>
                </div>
            </div>
        )}
    </div>
    </div>
</section>

</main>
)
}

export default Home;