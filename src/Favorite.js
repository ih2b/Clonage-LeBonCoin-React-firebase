import React from 'react'
import "./Favorite.css"
import FavoriteCard from './FavoriteCard'
import { useStateValue } from './StateProvider';
function Favorite() {
    const [{favorites},dispatch] =useStateValue();
    console.log(favorites);
    return (
        <div className="favorite">
            <h2>Annonce sauvegardées</h2>
            <h1>Retrouvez vos annonces sauvegardées sur tous vos appareils</h1>
            <h3>Si l’annonce n’est plus active sur le site, elle disparaîtra automatiquement de votre sélection.</h3>
            <div className="favorite__articles">
            {favorites.map((favorite)=>{
                return(
                    <FavoriteCard image={favorite.image} title={favorite.title} price ={favorite.price} city={favorite.city} />
                )
            })
            } 
            </div>
        </div>
    )
}

export default Favorite
