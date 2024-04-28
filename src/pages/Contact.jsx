import { Link } from "react-router-dom";
import "../scss/ui/_contacto.scss";
import MenuHamburguesa from "../components/MenuHamburguesa";
import Insta from "../Img/instagram.png";
import Gutihub from "../Img/github.png";
import Twiter from "../Img/twiter.png";
import Linke from "../Img/linkedin.png";

const Contact = () => {
  return (
    <div className="over efectoFade">
      <div className="contacto">
        <MenuHamburguesa />

        <div className="esquinac">
          <div className="esquinac__encabezadoc">
           
            <p className="esquinac__parrafoc">/04</p>
          </div>
        </div>

        <div className="contacts">
          <div className="texto">
            <p className="texto__parrafoc1">
              me puedes contactar por{" "}
              <Link
                className="texto__enlacesc"
                target="_blank"
                to="mailto:facucostafotografia@gmail.com"
              >
                mail
              </Link>{" "}
              o{" "}
              <Link
                className="texto__enlacesc"
                to="tel:+34624453418"
                target="_blank"
              >
                movil
              </Link>
              .
            </p>
          </div>

          <div className="redes">
            <Link
              to="https://www.linkedin.com/in/facundo-costa-b20493256/"
              target="_blank"
            >
              <img className="redes__icon" src={Linke} alt="redes" />
            </Link>

            <Link to="https://github.com/Gusi47" target="_blank">
              <img className="redes__icon" src={Gutihub} alt="redes" />
            </Link>

            <Link to="https://twitter.com/costa_gusi" target="_blank">
              <img className="redes__icon" src={Twiter} alt="redes" />
            </Link>

            <Link
              to="https://www.instagram.com/facuginescosta/"
              target="_blank"
            >
              <img className="redes__icon" src={Insta} alt="redes" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
