import React from 'react'
import "./Card.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from './StateProvider';
function Card({title,price,image,city}) {
    const [{favorites},dispatch]=useStateValue();
    console.log('favorites',favorites);
    const addToFavorite =()=>{
        dispatch({
            type:'ADD_TO_FAV',
            item:{
                title:title,
                image:image,
                price:price,
                city:city
            }
        })
    }

    return (
        <div className="card">
            <img src={image} alt="" className="card__img" />
            <div className="card__Right">
            <h2> {title} </h2>
            <h3>{price} $</h3>
            <p>{city}</p>
            </div>
            <div className="card__Left" onClick={addToFavorite}>
                <FavoriteBorderIcon />
            </div>

        </div>
    )
}

export default Card
