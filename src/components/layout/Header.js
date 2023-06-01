import React, {Component} from 'react';
import '../../styles/components/layout/header.css';
import Nav from './Nav.js'

const Header = (props) => {
    return (
        <header>
            <Nav/>
        <div className='holderhead'>
        <img src='images/logo.png' width="100" alt="La Ola de Chapa"></img>
        <h1>La OLA <br></br>de CHAPA</h1>
        </div>
        </header>
    );
}


export default Header;