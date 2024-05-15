import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/components/formulario.css";

import CardTerminal from "../layouts/CardTerminal.astro";

export  const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c3pj7kj', 'template_sin0a48', form.current, {
        publicKey: '7jMwWtPh5sf9XhZg3',
      })
      .then(
        () => {
          console.log('¡Éxito!');
        },
        (error) => {
          console.log('Error...', error.text);
        },
      );
  };

  return (
    
    <form className="formulario__contacto" ref={form} onSubmit={sendEmail}>
      <div className="input-container">
        <label className="titulo__dark" htmlFor="name">Nombre</label>
        <input className="input text__boxes" type="text" name="user_name"placeholder="Tu nombre"
          title="Solo se aceptan letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
          required data-type="nombre" />
        <span className="contact-form-span none" data-span="error">Este campo es obligatorio</span>
      </div>

      <div className="input-container formulario__inputs">
        <label className="input-label titulo__dark" htmlFor="email" >Correo electrónico</label>
        <input type="email" name="user_email" id="email" className="input" placeholder="Correo electrónico"
          title="Correo electrónico inválido" required data-type="email"
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" />
        <span className="contact-form-span none" data-span="error">Este campo es obligatorio</span>
      </div>

      <div className="input-container formulario__inputs">
        <label className="titulo__dark" htmlFor="mensaje">Mensaje</label>
        <textarea className="text__boxes" name="message"  cols="50" rows="7" data-pattern="^.{1,255}$"
          data-type="mensaje" placeholder="Tu mensaje" required
          title="El mensaje no puede exceder los 255 caracteres"></textarea>
        <span className="contact-form-span none" data-span="error">Este campo es obligatorio</span>
      </div>

      <div className="about__contactar">
        <input type="submit"   id="button" value="Send Email"/>
      </div>
    </form>
 
  );
};



export default ContactUs;