import React from "react";
import { PropsWithChildren} from "react";
import "./Modal.css";

type IModalProps= {
    title: string,
active:boolean;
onClose: () => void
};


const Modal = ({title,  children, active, onClose}: PropsWithChildren<IModalProps>) => {
if (!active){
    return null;
}
    return(
    <form action="#">
        <div onClick={onClose} className="modal">
          <div className="modal__content" onClick={(event) => event.stopPropagation()}>
            <h3 className="modal__title">{title}</h3>
            <div className="modal__subTitle">{children}</div>
            <div className="modal__text"><p></p></div>
        <div className="modal__body">
            <button onClick={onClose} className="modal__button-send">Send</button>
        </div>
          </div>
        </div>
       </form>
    ) 
}

export default Modal;