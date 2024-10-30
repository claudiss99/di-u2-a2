import { getImageUrl } from './utils.js';

export default function Profile({name, codeImg, profesion, numeroPremios,premios, descubrimientos}) {
  return (
    <section className='Profile'>
        <h1>{name}</h1>
        <img 
        className="Avatar"
        src={getImageUrl(codeImg)}
        alt={name}
        width={70}
        height={70}

        />
        <ul>
            <li>
              <b>Profesion:</b>
              {profesion}   
            </li>
            <li>
                <b>Premios: {numeroPremios} </b>
                {premios}
            </li>
            <li>
                <b>Descubrió: </b>
                {descubrimientos}
            </li>
        </ul>

    </section>
  );
}

