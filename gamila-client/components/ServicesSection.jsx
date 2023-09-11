function ServicesSection() {
  return (
    <section id="services" className="services-container">
      <div className="services-container-inner">
        <h2>Nuestros servicios</h2>
        <div className="services-slider">
          <div className="service">
            <div className="service-img">
              <img
                src="/coporate-service.jpg"
                alt="corporate image"
              />
            </div>
            <div className="service-text">
              <h3>
                <strong>Traslados corporativos.</strong>
              </h3>
              <h4>
                Ofrecemos un servicio dirigido a empresas que agilizan la
                movilidad de su personal y/o ejecutivos.
              </h4>
            </div>
          </div>

          <div className="service">
            <div className="service-img">
              <img
                src="/turistic-service.jpg"
                alt="people transportation"
              />
            </div>
            <div className="service-text">
              <h3>
                <strong>Traslados turísticos ó recreativos.</strong>
              </h3>
              <h4>
                Servicio de pasajeros en general. Cualquiera sea el traslado que
                usted requiera nos encontramos a su disposición.
              </h4>
            </div>
          </div>

          <div className="service">
            <div className="service-img">
              <img
                src="./disabled-service.png"
                alt="disabled transportation"
              />
            </div>
            <div className="service-text">
              <h3>
                <strong>Traslados de personas con discapacidad</strong>
              </h3>
              <h4>
                Trabajamos con obras sociales e individuales. Brindamos un
                servicio integral las 24 horas.
              </h4>
            </div>
          </div>
        </div>
        <button className="cotization-service">
          <a href="#form">COTIZA TU TRASLADO SIN COMPROMISO!</a>
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
