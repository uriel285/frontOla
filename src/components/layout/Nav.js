import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/nav.css';
<link to='Index'>Block</link>

const Nav = (props) => {
    return (
        <nav>

                <ul>
                <li><NavLink to='/' className={({isActive}) => isActive ? "activo" : undefined}>Home</NavLink></li>
                <li><NavLink to='/nosotros' className={({isActive}) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                <li><NavLink to='/ubicacion' className={({isActive}) => isActive ? "activo" : undefined}>Ubicación</NavLink></li>
                <li><NavLink to='/contacto' className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>

        </nav>
    );
}

export default Nav;