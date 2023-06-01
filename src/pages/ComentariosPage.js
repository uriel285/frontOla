import React, { useState, useEffect } from "react";
import axios from 'axios'
import ComentarioItem from "../components/ComentarioItem";

const ComentariosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const cargarComentarios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/comentarios');
            setComentarios(response.data);
            setLoading(false);
        };
        cargarComentarios();
    },
        [])

    return (
        <section className="holder">
            <h2>Comentarios</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                comentarios.map(item => <ComentarioItem key={item.id} usuario={item.usuario} puntuacion={item.puntuacion} comentario={item.comentario} imagen={item.imagen} />)

            )}
        </section>
    );
}

export default ComentariosPage;