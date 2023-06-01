import React, {useState} from 'react';
import Gallery from '../components/layout/Carrousel';
import '../../src/styles/components/pages/home.css';
import {CgCloseO} from 'react-icons/cg';

const HomePage = (props) => {
    const [mostrartestimonios, setShowTestimonios] = useState(false);

const mostrar = () => {
    setShowTestimonios(true);
    };

const desaparecer = () => {
    const elemento = document.querySelector('#elemento-a-ocultar');
    elemento.classList.add('fade-out');
};

const ocultar = () => {
    desaparecer();
    setTimeout(true);
    setTimeout(() => setShowTestimonios(false), 500);
};


return (
        <main className='holderhome'>
             <div className='galdiv'>
                            <Gallery />
                            
                </div>
            

                <div className='columnas'>
                <div className='bienvenidos'>                    
                    <span>Bienvenidos</span>
                    <p>La Ola de Chapa son las mejores cabañas en Chapadmalal, un lugar ideal para aquellos que buscan una escapada tranquila y relajante. Nuestras cabañas están diseñadas para brindarle la comodidad y el confort que necesita para disfrutar de su estadía en la costa atlántica.
                        <br></br>
                        Cada cabaña tiene capacidad para cuatro personas y está equipada con todo lo necesario para una estadía agradable.
                        <br></br>
                        Lo mejor de nuestras cabañas es su ubicación, que combina lo mejor del campo y el mar. Podrás disfrutar de la tranquilidad del campo y la belleza natural de la costa atlántica, todo en un solo lugar. Además, estamos a pocos minutos de las playas más hermosas de la zona.
                        <br></br>
                        Si buscás una escapada para descansar y disfrutar de la naturaleza, nuestras cabañas son la elección perfecta. Reserve su estadía hoy mismo y descubrí todo lo que San Eduardo de Chapadmalal tiene para ofrecer, vení a La Ola de Chapa.</p><br></br>
                </div>
                <div className='depor'>
                <h2>Playas Locales</h2> <br></br>
                <p>Chapadmalal tiene las mejores playas para relajarse y los mejores points para surfistas, estas son algunas de ellas.</p> 
                <button onClick={mostrar}>Ver</button>
                </div>
                <div className={mostrartestimonios ? 'testimonios-visible' : 'testimonios'} id='elemento-a-ocultar'>
                    <div className='testimonio'>
                        <div className='cuadrado'>
                            <img src='images/foto1.png'></img> 
                            <div className='textocuadrado'>
                            <h5>Hoteles</h5>
                            </div>
                        </div> <br></br>
                        <hr></hr> <br></br>
                        <div className='cuadrado'>
                            <img src='images/lunaroja.jpg'></img> 
                            <div className='textocuadrado'>
                            <h5>Luna Roja</h5>
                            </div>
                        </div> <br></br>
                        <hr></hr><br></br>
                        <div className='cuadrado'>
                            <img src='images/cruzdelsur.jpg'></img> 
                            <div className='textocuadrado'>
                            <h5>Cruz del Sur</h5>
                            </div>
                        </div> <br></br>
                        <hr></hr> <br></br>
                        <div className='cuadrado'>
                            <img src='images/lapaloma.jpg'></img> 
                            <div className='textocuadrado'>
                            <h5>La Paloma</h5>
                            </div>
                        </div>
                    </div> <br></br> <CgCloseO className='close' onClick={ocultar}/>
                </div>
            </div>
        </main>
    );}

export default HomePage;