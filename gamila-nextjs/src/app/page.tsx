import Image from "next/image";

export default function Home() {
  return (
    <nav className="bg-black">
      <ul className="flex w-full">
        <li className="flex w-1/3">
          <Image
            className="self-center"
            src="/../../img/gamila-logo-nav.png"
            alt="img not found"
            width={50}
            height={50}
          />
          <h1 className="self-center">Traslados Gamila</h1>
        </li>

        <div className="flex justify-around w-1/3">
          <li className="border-solid border-b-2 cursor-pointer self-center">
            Servicios
          </li>

          <li className="border-solid border-b-2 cursor-pointer self-center">
            Obras Sociales
          </li>

          <li className="border-solid border-b-2 cursor-pointer self-center">
            Contacto
          </li>
        </div>

        <div className="flex justify-center w-1/3">
          <button className="bg-green-700 hover:bg-red-700 cursor-pointer self-center px-4 py-2 radius-6">
            COTIZA TU TRASLADO
          </button>
        </div>
      </ul>
    </nav>
  );
}
