import { Link } from "react-router-dom";

import Particlejs from "../components/Particlejs";
import "../scss/ui/_inicio.scss";

import EfectoType from "../components/EfectoType";

const Inicio = () => {
  return (
    <>
      <Particlejs />
      <Link to="about" className="contenedori">
        <EfectoType />
      </Link>
    </>
  );
};

export default Inicio;
