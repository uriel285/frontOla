import React from 'react';
import '../styles/components/layout/map.css';

function Mapa(props) {
    const {
      iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.3435398054526!2d-57.708776424566516!3d-38.20192015632076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95851d22a1c77965%3A0x5d832227f6acc31a!2sLa%20Ola%20de%20Chapa!5e0!3m2!1ses-419!2sar!4v1681585601351!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } = props;
    return <div className="Mapa" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}

export default Mapa;