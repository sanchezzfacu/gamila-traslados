import Image from "next/image";
import mainImg from "../../../../img/flota1.jpg";
// import mainImg from "../../../new-images/bg-salar.jpeg";

function WelcomeSection() {
  return (
    <section className="h-full w-full">
      <div className="absolute">
        <div>
          <h4>Estamos cerca tuyo en los momentos más importantes</h4>
          <h3>Porque para nosotros tu tiempo vale.</h3>
        </div>
        <div>
          <h3>
            <strong>Traslados Corporativos.</strong>
          </h3>
          <h3>
            <strong>Salidas Turísticas/Recreativas</strong>
          </h3>
          <h3>
            <strong>Traslados de Personas con Discapacidad</strong>
          </h3>
        </div>
        <a href="#form">
          <button>PIDA UNA COTIZACION</button>
        </a>
      </div>

      <Image
        className="h-full w-screen"
        src={mainImg}
        alt="Descripción de la imagen"
        width={500}
        height={300}
      />
    </section>
  );
}

{
  /* <picture>
              <source srcset="./img/flota2.jpg" media="(max-width: 600px)">
              <source srcset="./img/flota1.jpg" media="(min-width: 601px)">
              <img src="./img/flota1.jpg" alt="">
          </picture> */
}
export default WelcomeSection;
