import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../scss/ui/_efectoType.scss";

const EfectoType = () => {
  const [text] = useTypewriter({
    words: [
      "hola mi nombre es Facundo Costa, soy Frontend Developer, bienvenidos a mi mundo",
    ],

    typeSpeed: 55,

  });

  return (
    <div className="contenedore">
      <h1 className="span1">
        {text}
        <span className="span">
          <Cursor cursorStyle="|" />
        </span>
      </h1>
    </div>
  );
};

export default EfectoType;
