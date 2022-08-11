import axios from "axios";
import { useEffect, useState } from "react";

import "./Card.scss";

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    await axios
      .get(url)
      .then(({ data }) => setPokemon(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="card">
      <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
      <div className="data">
        <p>{pokemon?.name}</p>
        <div className="types">
          {pokemon?.types.map(({ type, slot }) => (
            <span key={slot}>{type?.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
