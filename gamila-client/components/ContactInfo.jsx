import React from 'react';

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Contacto</h2>                
      <div className="contact-info-inner">
        <div className="contact-section">
          <h4>• Por consultas y contratación, horario de atención de 8 a 20hs</h4>
          <h4>• Trabajamos únicamente con reserva con 24hs de anticipación</h4>
          <div className="email">
            <h4>• Email: <a href="mailto:transportegamilasrl@hotmail.com">transportegamilasrl@hotmail.com</a></h4>
          </div>
          <div className="numbers-container">
            <div className="first-numbers-column">
              <h4>• Cel: <span>387-5944808</span></h4>
              <h4>• Cel: <span>387-511104</span></h4>
            </div>
            <div className="second-numbers-column">
              <h4>• Cel: <span>387-5821387</span></h4>
              <h4>• Tel: <span>425-1220</span></h4>
            </div>
          </div>
        </div>
        <div className="contact-image-container">
          <img src="./img/contact-image.png" alt="contact img" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
