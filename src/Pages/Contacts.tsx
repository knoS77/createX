import React from "react";
import "../Styles/Contacts.css"



type OfficeItemBlock = {
    id: number,
    title: string,
    street: any,
    call: any,
    Email: string,
    Schedule: string,
};

const OfficesBlock:OfficeItemBlock[] = [
    {id: 1, title: 'New York, USA', street:`${8502} Preston Rd. Inglewood, New York ${98380}`, call: "+7-(996)-681-93-67", Email: 'sloyan00.00@mail.ru', Schedule: 'Mon - Fri 9:00 - 18:00'  },
    {id: 2, title: 'New Jersey, USA', street:`${2464} Royal Ln. Mesa, New Jersey ${45463}`, call: " +7-(996)-681-93-67", Email: 'sloyan00.00@mail.ru', Schedule: 'Mon - Fri 9:00 - 18:00'  },
    {id: 3, title: 'San Francisco, USA', street:`${8502} Preston Rd. Inglewood, New York ${98380}`, call:" +7-(996)-681-93-67", Email: 'sloyan00.00@mail.ru', Schedule: 'Mon - Fri 9:00 - 18:00'  },
]

const Contacts:React.FC = () => {

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

            <section className="offices"> 
                <div className="offices__title title">
                Our offices
                    <p>Give us a call, send us a note or visit our office. We can`t wait to hear from you!</p>
                </div>
                <div className="offices__container">
                    {OfficesBlock.map((arr):React.ReactElement => 
                        <div className="offices__block">
                            <div className="offices__block-title">
                                {arr.title}
                            </div>
                            <div className="offices__block-street">
                                {arr.street}
                            </div>
                            <div className="offices__block-call">
                            <span>   Call: </span> {arr.call} 
                            </div>
                            <div className="offices__block-mail">
                             <span> Email: </span> {arr.Email} 
                            </div>
                            <div className="offices__block-shchedule">
                           <span> Schedule: </span>{arr.Schedule} 
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Contacts;