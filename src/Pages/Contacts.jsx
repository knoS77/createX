import React from "react";
import "../Styles/Contacts.css";
const Contacts = () => {
    
const offces = [
    {id: 1, title : 'New York, USA', street: '8502 Preston Rd. Inglewood, New York 98380', call: '+7-(996)-681-93-67', Email: 'sloyan00.00@mail.ru', Schedule: 'Mon - Fri 9:00 - 18:00',},
    {id: 2, title : 'New Jersey, USA', street: '2464 Royal Ln. Mesa, New Jersey 45463', call: '+7-(996)-681-93-67', Email: 'sloyan00.00@mail.ru', Schedule: 'Mon - Fri 9:00 - 18:00',},
    {id: 3, title : 'San Francisco, USA', street: '8502 Preston Rd. Inglewood, San Francisco 98380', call: '+7-(996)-681-93-67', Email: 'sloyan00.00@mail.ru', Schedule: 'Mon - Fri 9:00 - 18:00',},

]
    return(
        <main>
            <div className="contacts">
                <div className="contacts__container">
                    <div className="contacts__title">
                        Contacts
                        <p className="contacts__subTitle">
                        Contact us for all your construction needs. We always welcome any questions and comments.
                        </p>
                    </div>
                </div>
            </div>
            <section className="offces">
                <div className="offces__title title">
                Our offices
                <p className="offices__subTitle">
                Give us a call, send us a note or visit our office. We can`t wait to hear from you!
                </p>
                </div>
                <div className="offces__container">
                    {offces.map((office) => (
                        <div key={office.id} className="offices__block">
                            <div className="offices__block-title">{office.title}</div>
                            <div className="offices__block-street">
                                {office.street}
                            </div>
                            <div className="offices__block-call">
                             <span>   Call: </span> {office.call} 
                            </div>
                            <div className="offices__block-mail">
                              <span>  Email: </span> {office.Email} 
                            </div>
                            <div className="offices__block-shchedule">
                          <span>  Schedule: </span> {office.Schedule} 
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Contacts;