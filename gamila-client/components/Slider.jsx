
function SliderSection() {
  return (
    <section className="slider">
      <ul>
        <li>
          <div className="info-img">
            <div className="slider-info-container">
              <div className="phrase-container">
                <h4 className="first-line-phrase">Estamos cerca tuyo en los momentos más importantes</h4>
                <h3 className="second-line-phrase">Porque para nosotros tu tiempo vale.</h3>
              </div>
              <div className="service-slider">
                <h3 className="coorporative"><strong>Traslados Corporativos.</strong></h3>
                <h3 className="turistic"><strong>Salidas Turísticas/Recreativas</strong></h3>
                <h3 className="disabled"><strong>Traslados de Personas con Discapacidad</strong></h3>
              </div>
              <a href="#form">
                <button>PIDA UNA COTIZACION</button>
              </a>
            </div>
            <picture>
              <source srcSet="/flota2.jpg" media="(max-width: 600px)" />
              <source srcSet="/flota1.jpeg" media="(min-width: 601px)" />
              <img src="/flota1.jpeg" alt="" />
            </picture>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SliderSection;
