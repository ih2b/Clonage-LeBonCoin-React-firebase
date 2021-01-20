import React from 'react'
import "./FavoriteCard.css"
import MessageIcon from '@material-ui/icons/Message';
function FavoriteCard({image,title,price,city}) {
    return (
        <div className="favoriteCard">
            <img src={image} alt="" className="favoriteCard__img" />
            <div className="favoriteCard__Right">
            <h2> {title} </h2>
            <h3>{price} $</h3>
            <p>{city}</p>
            </div>
            <div className="favoriteCard__button">
                <MessageIcon />
                <snap>Envoyer un message</snap>
            </div>

        </div>
    )
}

export default FavoriteCard
