import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import Button from './components/Button';
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Logo da PotterFlix" />
            </Link>

            <div>
                <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo Vídeo
                </Button>                
            </div>
        </nav>
    );
}

export default Menu;