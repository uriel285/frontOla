import React, {useState} from 'react';
import '../styles/components/pages/contacto.css';

import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
axios.post('http://localhost:3000/api/contacto', formData)
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
        setFormData(initialForm)
    }
    }

    return(
        <main className='holder-contacto'>
            <div className='contac'>
                <h2>Contacto Rápido</h2>
                <form className='formulario' onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label htmlFor='email'>Mail(@)</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label htmlFor='telefono'>Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label htmlFor='mensaje'>Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="acciones"><input type="submit" value="Enviar"/></p>
                </form>
                <div className="datos">
                    <h2>Otras vías de comunicación</h2>
                    <p>También puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Teléfono: 2291458430</li>
                        <li>Email: luchopatacho@hotmail.com</li>
                        <li>Facebook: La Ola de Chapa</li>
                        <li>Instagram: laoladechapa</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;