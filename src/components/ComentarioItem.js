import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const ComentarioItem = (props) => {
    const { puntuacion, comentario, imagen, usuario, body } = props;

    return (
        <section className='comentariosection'>
        <div className='comentarios'>
            <h1>{usuario}</h1>
            <h1>{puntuacion}  <AiFillStar className='estrella'/></h1> <br></br>
            <h1>{comentario}</h1>
            <img src={imagen} alt='' />
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div> <hr></hr>
        </section>
    );
}

export default ComentarioItem;