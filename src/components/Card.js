import React from "react";

function Card(props) {

    const handleClick = () => {
        props.onCardClick(props.card);
    }

    return (
        <li className="place" id={props.card._id}>
        <img className="place__image" onClick={handleClick} src={props.card.link} alt={props.card.name}></img>
        <div className="place__basement">
          <h2 className="place__subtitle">{props.card.name}</h2>
          <div>
            <button className="place__heart" type="button"></button>
            <span className="place__heart-count">{props.card.likes.length}</span>
          </div>
        </div>
        <button className="place__delete" type="button"></button>
      </li>
)
}

export default Card