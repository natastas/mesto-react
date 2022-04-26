import React from "react";

function ImagePopup(props) {
    return (
      <div className={"popup popup_type_picture" + (props.isOpen && ' popup_opened')} >
        <div className="popup__box">
          <button type="button" className="popup__close popup__close_type_picture" onClick={props.onClose}></button>
          <img className="popup__image" src={props.card.link}></img>
          <h3 className="popup__subtitle"></h3>       
        </div>
      </div>
    )
}

export default ImagePopup;