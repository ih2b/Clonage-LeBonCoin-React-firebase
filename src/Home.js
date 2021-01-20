import React from 'react'
import styled from 'styled-components';
import "./Home.css";
import Search from './Search';
import Card from'./Card'

const ButtonBlue = styled.button`
  font-size: 25px;
  margin: -25px;
  padding:10px;
  padding-left:50px;
  padding-right:50px;
  border-radius: 3px;
  background-color: #4183d7;
  color: #fff;
  border: none;
`;
function Home() {
    return (
        <div className="home">
            <div className="home__ublock">
                <div className="home__background">
                <h1>Avec la livraison <u>chez vous</u> tout est à portée de main !</h1>
                <h3>Trouvez la bonne affaire parmi les millions de petites annonces leboncoin</h3>
                </div>
                <Search />
                <ButtonBlue>Rechercher (39 522 102 résultats)</ButtonBlue>
            </div>
            <div className="home__card">
                <Card image="https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_500/img/chaise-style-scandinave-bleu-marine-et-chene-massif-1000-16-4-174623_4.jpg" title="chaise" price ={50} city="7800 Rouen"/>
            </div>
        </div>
    )
}

export default Home
