import MenuHamburguesa from "../components/MenuHamburguesa";
import "../scss/ui/_home.scss";

const About = () => {
  return (
    <div className="home efectoFade">
      <MenuHamburguesa />

      <div className="esquinah">
        <div className="esquinah__encabezadoh">
          
          <p className="esquinah__parrafoh">/01</p>
        </div>
      </div>

      <div className="contenidoh">
        <p className="contenidoh__parrafoh1">
          Soy una persona apasionada por el desarrollo web y la creación. Me
          considero un aprendiz constante, siempre en busca de nuevas formas de
          mejorar mis habilidades y conocimientos, sin dejar lado el trabajo en
          equipo, que es clave para lograr objetivos y enfrentar desafíos. En mi
          corta carrera como desarrollador web, he creado diversos proyectos que
          me han permitido adquirir experiencia en diferentes tecnologías y
          herramientas. La búsqueda de mi primera oportunidad es constante para
          poder seguir creciendo como persona y profesionalmente, si hay algo
          que aprendí desde que comencé en este mundo del desarrollo es a tener
          paciencia, no hay lugar para la frustración y siempre para adelante.
        </p>
      </div>

      <div className="texth translatex">
        <p className="texth__parrafoh2">sobre mi</p>
      </div>
    </div>
  );
};

export default About;
