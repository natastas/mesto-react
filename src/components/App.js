import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'; 
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({}); 


  const handleCardClick = (card) => {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const closeAllPopups = (e) => {
    if (e.target.classList.contains('popup__close') || !(e.target.classList.contains('popup_opened')) || (e.key === 'Escape')) {
      setIsEditProfilePopupOpen(false)
      setIsAddPlacePopupOpen(false)
      setIsEditAvatarPopupOpen(false)
      setSelectedCard(false)
    } 
  }

  return (
    <div className="App">
      <div className="page">

        <Header />

        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>

          <input placeholder="Имя" name="nameInput" type="text" id="name-input" className="popup__input popup__input-name" />
          <span className="name-input-error popup__input-error">Сообщение об ошибке</span>
          <input placeholder="О себе" name="jobInput" type="text" id="job-input" className="popup__input popup__input-job" />
          <span className="job-input-error popup__input-error">Сообщение об ошибке</span>
        </PopupWithForm>

        <PopupWithForm
          name="card-add"
          title="Новое место"
          button="Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>

          <input placeholder="Название" name="name" id="place-input" type="text" className="popup__input popup__input-place" />
          <span className="popup__input-error place-input-error">Сообщение об ошибке</span>
          <input placeholder="Ссылка на картинку" name="link" id="link-input" type="url" className="popup__input popup__input-link" required/>
          <span className="popup__input-error link-input-error">Сообщение об ошибке</span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>

          <input placeholder="Ссылка на картинку" name="link" id="avatar-input" type="url" className="popup__input popup__input-avatar" required/>
          <span className="popup__input-error avatar-input-error">Сообщение об ошибке</span>
        </PopupWithForm>

        <PopupWithForm
          name="delete-card"
          title="Вы уверены?"
          button="Да">
        </PopupWithForm>

        <ImagePopup 
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />

      </div>
    </div>
  );
}

export default App;
