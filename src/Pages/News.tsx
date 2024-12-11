import React from "react";
import "../Styles/News.css";
// news
import newsBlockOne from "../Img/sc4 block1.jpg";
import newsBlockTwo from "../Img/sc4 block2.jpg";
import newsBlockThree from "../Img/sc4 block3.jpg";
import newsBlockFour from "../Img/sc4 block4.png";
import newsBlockFive from "../Img/sc4 block5.png";
import newsBlockSix from "../Img/sc4 block6.png";


type NewsBlockItem = {
    id: number,
    img: any,
    title: string,
    subTitle: any,
    text: any,
};

const NewsBlock:NewsBlockItem[] = [

    {id: 1, img: newsBlockOne, title: 'How to Build Climate Change-Resilient Infrastructure', subTitle: 'Industry News | June 24 2020 | 4 comments', text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...'},


    {id: 2, img: newsBlockTwo , title: 'How Construction Can Help Itself', subTitle: 'Innovation | June 12 2020 | No comments', text: 'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...'},


    {id: 3, img:  newsBlockThree, title: 'The Difference Between a Digger and an Excavator', subTitle: 'Expert Tips | May 16 2020 | No comments', text: 'Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...'},


    {id: 4, img: newsBlockFour, title: 'Building Construction Hand Tools', subTitle: 'Expert Tips | February 25 2020 | 1 comment', text: 'Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...'},


    {id: 5, img: newsBlockFive, title: 'Top 10 Construction Trends', subTitle: 'Industry News | January 14 2020 | No comments', text: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...'},

    
    {id: 6, img: newsBlockSix, title: 'Types of Flooring Materials', subTitle: 'Сompany News  | December 13 2007 | No comments', text: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...'},
];


const News:React.FC = () => {

    return(
        <main>
            <div className="news">
                <div className="news__container">
                    <div className="news__title">
                         NEWS
                        <p>Stay tuned with our news, expert tips and articles.</p>
                    </div>
                </div>
            </div>
            <section className="Categories">
                <div className="categories__title title">
                Categories
                </div>
                <div className="categories__container">
                    {NewsBlock.map((arr):React.ReactElement => 
                        <div className="news__block">
                            <img src={arr.img} alt={arr.title} />
                            <div className="news__block-title">
                                {arr.title}
                                <p className="news__block-subTitle">{arr.subTitle}</p>
                            </div>
                            <div className="news__block-text">
                                {arr.text}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default News;