import { Anton } from "next/font/google";

const anton = Anton({ weight: ["400"], subsets: ["latin"] });

function NavBar() {
  return (
    <nav>
      <ul>
        <input id="opener" type="checkbox" />
        <div className="logo">
          <li>
            <img src="/gamila-logo-nav.png" alt="img not found" height="50px" />
            <h1 className={anton.className}>Traslados Gamila</h1>
          </li>
        </div>
        <div className="menu-btn">
          <label htmlFor="opener">
            <img src="./img//menu-btn.png" alt="img not found" />
          </label>
        </div>
        <div className="section-nav" id="inicio">
          <div className="section-nav-inner">
            <div className="close-menu">
              <label htmlFor="opener">
                <h3>Cerrar</h3>
                <img src="./img/close-btn.png" alt="" />
              </label>
            </div>
            <li>
              <label htmlFor="opener">
                <a href="#services">
                  <h3 className="nav-option">Servicios</h3>
                </a>
              </label>
            </li>
            <li>
              <label htmlFor="opener">
                <a href="#contact">
                  <h3 className="nav-option">Contacto</h3>
                </a>
              </label>
            </li>
            <li>
              <label htmlFor="opener">
                <a href="#form">
                  <h3 className="nav-option">Cotiza tu traslado</h3>
                </a>
              </label>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
