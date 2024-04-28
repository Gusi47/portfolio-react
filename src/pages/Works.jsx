import { Link } from "react-router-dom";
import MenuHamburguesa from "../components/MenuHamburguesa";
import "../scss/ui/_portfolio.scss";
import foto1 from "../Img/pagina1.jpg";
import foto2 from "../Img/pagina2.jpg";
import foto3 from "../Img/pagina3.jpg";
import foto4 from "../Img/pagina4.jpg";
import foto5 from "../Img/pagina5.jpg";
import foto6 from "../Img/pagina6.jpg";
import foto7 from "../Img/pagina7.jpg";
import foto8 from "../Img/pagina8.jpg";
import foto9 from "../Img/pagina9.jpg";
import foto11 from "../Img/pagina11.jpg";
import foto12 from "../Img/pagina12.jpg";
import foto13 from "../Img/pagina13.jpg";

const Works = () => {
  return (
    <div className="portfoliop">
      <MenuHamburguesa />

      <div className="esquinap">
        <div className="esquinap__encabezadop">
         
          <p className="esquinap__parrafop">/03</p>
        </div>
      </div>
      <div className="conteimg">
        <div className="imagenesp">
          <Link to="https://clon-baberia.netlify.app/" target="_blank">
            {" "}
            <img className="imagenesp__imgp" src={foto7} alt="fotos trabajos" />
          </Link>

          <Link to="https://clon-portfolio.netlify.app/" target="_blank">
            {" "}
            <img className="imagenesp__imgp" src={foto6} alt="fotos trabajos" />
          </Link>

          <Link to="https://patagoniagastrobar.netlify.app/" target="_blank">
            {" "}
            <img className="imagenesp__imgp" src={foto3} alt="fotos trabajos" />
          </Link>

          <Link to="https://lerestobar.netlify.app/" target="_blank">
            {" "}
            <img className="imagenesp__imgp" src={foto4} alt="fotos trabajos" />
          </Link>

          <Link to="https://argentinewinegroup.netlify.app/" target="_blank">
            {" "}
            <img className="imagenesp__imgp" src={foto5} alt="fotos trabajos" />
          </Link>

          <Link to="https://fotografia-web.netlify.app/" target="_blank">
            {" "}
            <img className="imagenesp__imgp" src={foto2} alt="fotos trabajos" />
          </Link>

          <Link
            to="https://clipboard-landing-sass.netlify.app/"
            target="_blank"
          >
            {" "}
            <img className="imagenesp__imgp" src={foto1} alt="fotos trabajos" />
          </Link>

          <Link to="https://clima-js-app.netlify.app/" target="_blank">
            {" "}
            <img className="imagenesp__imgp" src={foto8} alt="fotos trabajos" />
          </Link>

          <Link
            to="https://mi-cotizador-criptomoneda.netlify.app/"
            target="_blank"
          >
            {" "}
            <img className="imagenesp__imgp" src={foto9} alt="fotos trabajos" />
          </Link>

          <Link to="https://cocktail-web.netlify.app/" target="_blank">
            {" "}
            <img
              className="imagenesp__imgp"
              src={foto11}
              alt="fotos trabajos"
            />
          </Link>

          <Link to="https://estudio-web-foto.netlify.app/" target="_blank">
            {" "}
            <img
              className="imagenesp__imgp"
              src={foto12}
              alt="fotos trabajos"
            />
          </Link>

          <Link to="https://super-mooncake-05ca97.netlify.app/" target="_blank">
            {" "}
            <img
              className="imagenesp__imgp"
              src={foto13}
              alt="fotos trabajos"
            />
          </Link>
        </div>
      </div>

      <div className="text">
        <p className="text__parrafop1">trabajos</p>
      </div>
    </div>
  );
};

export default Works;
