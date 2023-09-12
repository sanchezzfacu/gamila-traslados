
function QualitiesSection() {
  return (
    <section className="qualities-container">
      {/* <h2 className="qualities-description">Contamos con una flota de primer nivel que brindan el mayor confort y seguridad que se 
            puede ofrecer.</h2> */}
      <div className="qualities-img-container">
        <img className="citroen" src="/citroen-jumpy.png" alt="citroen-jumpy" />
      </div>

      <div className="service-qualifications">
        <div className="qualification">
          <img src="./img/qualifications-icon.png" alt="" />
          <h3>Contamos con todas las habilitaciones para un traslado en condiciones.</h3>
        </div>
        <div className="qualification">
          <img src="./img/security-icon.png" alt="" />
          <h3>Brindamos todas las medidas de seguridad para que viajes seguro.</h3>
        </div>
        <div className="qualification">
          <img src="./img/diamond-icon.png" alt="" />
          <h3>Contamos con una flota de vehículos de alta gama.</h3>
        </div>
        <div className="qualification">
          <img src="./img/payment-icon.png" alt="" />
          <h3>Servicio de facturación online en el día.</h3>
        </div>
        <div className="qualification">
          <img src="./img/transfer-icon.png" alt="" />
          <h3>Recibimos pagos por transferencia.</h3>
        </div>
      </div>
    </section>
  );
}

export default QualitiesSection;
