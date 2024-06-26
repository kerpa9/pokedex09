import { useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import "../pokedex/styles/pokeSelect.css";

const PokeSelect = ({ setTypeFilter }) => {
  const [types, getTypes] = useFetch();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type";
    getTypes(url);
  }, []);

  const valueSelect = useRef();

  const handleChange = () => {
    setTypeFilter(valueSelect.current.value);
  };

  return (
    <select className="select" ref={valueSelect} onChange={handleChange}>
      <option className="select_op1" value="">
        All Pokemons
      </option>
      {types?.results.map((type) => (
        <option className="select_op2" key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default PokeSelect;
