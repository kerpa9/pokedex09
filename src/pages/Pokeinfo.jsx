import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../pages/styles/pokeInfo.css";

const Pokeinfo = () => {
  const [pokemon, getPokemon] = useFetch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    getPokemon(url);
  }, []);

  console.log(pokemon);

  const handleClick = () => {
    navigate("/pokedex");
  };

  return (
    <section className="pokeInfo">
      <h2>¡Return, click to image! </h2>
      <figure className="pokeIndo_img">
        <img
          className="pokeInfo_img"
          onClick={handleClick}
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt="Pokemon"
        />
      </figure>
      <ul className="pokeIndo_stats">
        {pokemon?.stats.map((stat) => (
          <li className="pokeInfo_statsItem" key={stat.stat.url}>
            <span>{stat.stat.name}</span>
            <span>{stat.base_stat}/250</span>
            <div className="outbar">
              <div
                className="inbar"
                style={{ width: `${stat.base_stat / 2.5}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pokeinfo;
