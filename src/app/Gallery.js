import { getImageUrl } from './utils.js';
import Profile from './ProfileNew.js';

/*
//Otra forma de hacerlo, lo cogemos en el PROFILE2(En nuestra aplicación, esto lo cogeriamos de la base de datos)
const persona1 ={
  name:"Maria Skłodowska-Curie",
  codeImg:"szV5sdG",
  profesion:"física y química",
  premios:["Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci"],
  descubrimientos:"polonio (elemento químico)"
}

export default function Profile2({persona}) {
  return (
    <section className='Profile'>
        <h1>{persona.name}</h1>
        <img 
        className="Avatar"
        src={getImageUrl(persona.codeImg)}
        alt={persona.name}
        width={70}
        height={70}
        />
        <ul>
            <li>
              <b>Profesion:</b>
              {persona.profesion}   
            </li>
            <li>
                <b>Premios: {persona.premios.length} </b>
                {persona.premios.join(", ")}
            </li>
            <li>
                <b>Descubrió: </b>
                {persona.descubrimientos}
            </li>
        </ul>

    </section>
  );
}
*/
//<Profile2 persona={persona1}/>
export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      
      <Profile name="Maria Skłodowska-Curie" codeImg="szV5sdG" profesion="física y química" numeroPremios="4" premios="Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci" descubrimientos="polonio (elemento químico)"/>
      <Profile name="Katsuko Saruhashi" codeImg="YfeOqp2" profesion="geoquímica" numeroPremios="2" premios="Premio Miyake de geoquímica, Premio Tanaka" descubrimientos="un método para medir el dióxido de carbono en el agua de mar"/>
      
    </div>
  );
}