function ImagePopup() {
    return (
      <div className="popup popup_type_picture">
        <div className="popup__box">
          <button type="button" className="popup__close popup__close_type_picture"></button>
          <img className="popup__image" src="#"></img>
          <h3 className="popup__subtitle"></h3>       
        </div>
      </div>
    )
}

export default ImagePopup;