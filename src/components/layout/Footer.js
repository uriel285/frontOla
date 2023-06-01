import React from 'react';
import '../../styles/components/layout/footer.css';
import {SiFacebook, SiInstagram, SiWhatsapp} from 'react-icons/si';

const Footer = (props) => {
    return(
<div className='wrapper'>
        <footer>
            <div className='iconos'>
        <a href='https://www.facebook.com/laola.dechapa/?locale=es_LA' target='_blank' rel='noreferrer'><SiFacebook className='facebook'/></a>
        <a href='https://www.instagram.com/laoladechapa/https://www.instagram.com/laoladechapa/' target='_blank' rel='noreferrer'><SiInstagram className='instagram'/></a>
        <a href='https://api.whatsapp.com/send?phone=5492291458430>' target='_blank' rel='noreferrer'><SiWhatsapp className='whatsapp'/></a>
        </div>
        <p>Derechos Reservados La Ola de Chapa año 2023</p>
        </footer>
</div>
    );
}

export default Footer;