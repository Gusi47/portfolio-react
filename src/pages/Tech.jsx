import MenuHamburguesa from "../components/MenuHamburguesa";
import "../scss/ui/_lenguajes.scss";

const Tech = () => {
  return (
    <div className="tech">
      <MenuHamburguesa />

      <div className="esquinat">
        <div className="esquinat__encabezadot">
         
          <p className="esquinat__parrafot">/02</p>
        </div>
      </div>
      

      <div className="lenguajes">
        <a className="boton" download href="/cv+portfolio.pdf">
          download cv
        </a>

        <ul className="lenguaje">
          <li className="lenguaje__li">html</li>
          <li className="lenguaje__li1">css</li>
          <li className="lenguaje__li">sass</li>
          <li className="lenguaje__li1">javascript</li>
          <li className="lenguaje__li">react</li>
          <li className="lenguaje__li1">next.js</li>
          <li className="lenguaje__li">astro</li>
          <li className="lenguaje__li1">git/github</li>
          <li className="lenguaje__li">wordpress/elementor</li>
          <li className="lenguaje__li1">vsc</li>
          <li className="lenguaje__li">figma</li>
        </ul>
      </div>

      <div className="textpa">
        <p className="textpa__parrafot1">lenguajes</p>
      </div>
    </div>
  );
};

export default Tech;
