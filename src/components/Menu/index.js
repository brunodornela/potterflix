import React from 'react';
import logo from '../../assets/img/logo.png'
import ButtonLink from './components/ButtonLink'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href = "/">
                <img className="Logo" src={logo} alt="Logo da PotterFlix" />
            </a>

            <ButtonLink href="/">
                Novo Vídeo
            </ButtonLink>

        </nav>
    );
}

export default Menu;