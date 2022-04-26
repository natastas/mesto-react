import React from 'react';
import api from '../utils/Api';
import Card from './Card'





function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
        .then(([profile, cards]) => {
            setUserName(profile.name)
            setUserDescription(profile.about)
            setUserAvatar(profile.avatar)
            setCards(cards)
        })
        .catch(err => {
            console.log(err)
        });
  }, [])

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__photo-container"><button className="profile__photo"  onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></button></div>
            <div className="profile__navigation">
            <div className="profile__edit">
                <h1 className="profile__title">{userName}</h1>
                <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
        </section>
        <section className="places">
          <ul className="places__box"></ul>
        </section>
        <section className="cards">
                <ul className="cards__items">
                    {cards.map(card => (
                        <Card
                            card={card}
                            onCardClick={props.onCardClick}
                            key={card._id}
                        />
                    ))}
                </ul>
            </section>
      </main>
    )
    
}

export default Main;