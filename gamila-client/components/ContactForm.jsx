import React from "react";

function ContactForm() {
  return (
    <div id="form" className="form-container">
      <div className="form-info">
        <div className="cotization-text">
          <h2>¡Pedí una cotización!</h2>
          <h3>-BRINDAMOS LOS MEJORES PRECIOS-</h3>
          <h3>COMPLETA EL FORMULARIO</h3>
        </div>
        <div className="phone-img">
          <img src="/form-phone.png" alt="img not found" />
        </div>
      </div>
      <form
        action="https://formsubmit.co/sanchezfacundocristian@hotmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="https://trasladosgamila.com/thanks.html"
        />
        <input
          type="hidden"
          name="_cc"
          value="sanchezfacundocristian@hotmail.com"
        />
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_blacklist"
          value="business, company, brand, offer, boost, improve, apply, investment, financial, provide, funding, hacked, databases, information, payment, service, month, months, website, page"
        />

        <input
          type="hidden"
          name="_subject"
          value="Alguien pidió una cotización!"
        />

        <h4 className="complete-form-phrase">
          Por favor, complete todos los campos. Esta información nos ayudará a
          brindarle una respuesta más rápida.
        </h4>

        <div className="personal-info-form">
          <label>
            <h5>Su nombre completo</h5>
            <input
              id="name"
              name="Nombre"
              spellCheck="false"
              required
              type="text"
              autoComplete="off"
            />
          </label>

          <label className="phone-number-label">
            <h5>Celular/Teléfono</h5>
            <input
              id="phone-number"
              spellCheck="false"
              type="number"
              autoComplete="off"
              required
            />
          </label>
        </div>

        <div className="select-passengers">
          <label className="select-form">
            <h5>Servicio a contratar</h5>
            <select
              required
              className="service-type"
              name="Tipo de traslado"
              id="service"
            >
              <option hidden>Seleccioná el tipo de traslado</option>
              <option value="Personal coorporativo">
                Personal coorporativo (ejecutivo)
              </option>
              <option value="Salida turística">
                Salida turística/recreativa
              </option>
              <option value="Persona con discapacidad">
                Persona con discapacidad
              </option>
            </select>
          </label>

          <label className="passengers-label">
            <h5>Cantidad de pasajeros</h5>
            <input
              id="passengers"
              type="number"
              spellCheck="false"
              autoComplete="off"
              required
            />
          </label>
        </div>

        <label htmlFor="" className="select-form obra-social-select">
          <h5>¿Cuenta con obra social?</h5>
          <select required name="Obra social" id="">
            <option value="-" hidden>
              Seleccioná alguna de las obras sociales con las que trabajamos
            </option>
            <option value="No tiene obra social">
              No cuento con obra social
            </option>
            <option value="OSDE">OSDE</option>
            <option value="OSPE">OSPE</option>
            <option value="GALENO">GALENO</option>
            <option value="BOREAL">BOREAL</option>
            <option value="OSPRERA">OSPRERA</option>
            <option value="SWISS MEDICAL">SWISS MEDICAL</option>
            <option value="OSMISS">OSMISS</option>
            <option value="OSSIMRA">OSSIMRA</option>
            <option value="OSDEB">OSDEB</option>
            <option value="AVALLIAN">AVALLIAN</option>
            <option value="SANCOR SALUD">SANCOR SALUD</option>
            <option value="PREVENCION DE SALUD SANCOR">
              PREVENCION DE SALUD SANCOR
            </option>
            <option value="FARMACIA">FARMACIA</option>
            <option value="OSDEPYM">OSDEPYM</option>
            <option value="OSSEG">OSSEG</option>
            <option value="SUPER INTENDENCIA DE SERVICIOS DE SALUD">
              SUPER INTENDENCIA DE SERVICIOS DE SALUD
            </option>
            <option value="Otra">Tengo otra obra social</option>
          </select>
        </label>

        <div className="service-time-form">
          <label htmlFor="date">
            <h5>Fecha</h5>
            <input required id="date" name="Fecha" type="date" />
          </label>

          <label>
            <h5>Hora</h5>
            <input name="Hora" type="time" />
          </label>
        </div>

        <div className="service-destiny-form">
          <label htmlFor="">
            <h5>Lugar de partida</h5>
            <input name="Lugar de partida" type="text" autoComplete="off" />
          </label>

          <label htmlFor="">
            <h5>Lugar de destino</h5>
            <input name="Destino" type="text" autoComplete="off" />
          </label>
        </div>
        <label className="message-form">
          <h5>Dejanos tu mensaje (opcional)</h5>
          <textarea spellCheck="false" name="Mensaje" id="" />
        </label>

        <button className="submit-btn">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
