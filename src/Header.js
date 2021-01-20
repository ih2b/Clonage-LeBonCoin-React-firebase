import React from 'react'
import './Header.css'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7d/Leboncoin.fr_Logo_2016.svg/1280px-Leboncoin.fr_Logo_2016.svg.png"className="leboncoinLogo"/>
                </Link>
                <div className="header__DeposerInput">
                    <AddBoxOutlinedIcon fontSize="large"/>
                    <sanp className="header__depose">Déposer une annonce</sanp>
                </div>
                <div className="header__search">
                    <SearchOutlinedIcon fontSize="large" />
                    <sanp className="header__rechercher">Rechercher</sanp>
                </div>
            </div>
            <div className="header__right">
                <div className="header__nav">
                    <div className="header__option">
                        <NotificationsNoneIcon fontSize="large" className="header__optionIcon"/>
                        <sanp>Mes recherches</sanp>
                    </div>
                    <Link to="/favorite" className ="option__link">
                    <div className="header__option">
                        <FavoriteBorderIcon fontSize="large" className="header__optionIcon"/>
                        <sanp className="header__optionSanp">Favoris</sanp>
                    </div>
                    </Link>
                    <div className="header__option">
                        <ChatOutlinedIcon fontSize="large" className="header__optionIcon"/>
                        <sanp>Messages</sanp>
                    </div>
                    <div className="header__option">
                        <PermIdentityIcon fontSize="large" className="header__optionIcon"/>
                        <sanp className="header__optionSanp">Se connecter</sanp>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header
