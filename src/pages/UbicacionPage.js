import React from 'react';
import '../styles/components/pages/ubicacion.css';
import { SiGooglemaps } from 'react-icons/si';
import Mapa from '../components/map'

const UbicacionPage = (props) => {
 return (
    <section className="holder-contact">
      <h2>Ubicación</h2>
      <p>
      En resumen, el complejo de cabañas de Chapadmalal es el destino perfecto para aquellos que buscan una experiencia de naturaleza única, y en especial para aquellos que buscan aventura en las olas del mar. Con una ubicación envidiable, rodeado de campos verdes y playas espectaculares, no es de extrañar que sea uno de los destinos más populares para aquellos que buscan escapar del estrés de la ciudad y disfrutar de la belleza natural de la región.
      </p>
      <Mapa />
      <div className='vamap'>
      <a
        href="https://goo.gl/maps/2mKFg5CP3YRXz4EC7"
        target="_blank"
        rel="noreferrer"
      >
        <SiGooglemaps className="icomap" /> <br></br>
        <p>Clickeá acá para ir a Maps</p>
      </a>
      </div>
    </section>
  );
};

export default UbicacionPage;

