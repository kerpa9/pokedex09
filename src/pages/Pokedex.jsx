import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import PokeCard from "../pokedex/PokeCard";
import PokeSelect from "../pokedex/PokeSelect";
import "../pages/styles/pokeDex.css";
import Paginate from "../components/Paginate";

const Pokedex = () => {
  const trainer = useSelector((store) => store.trainer),
    paginate = useSelector((store) => store.paginate);

  const [inputValue, setInputValue] = useState("");

  const [typeFilter, setTypeFilter] = useState("");

  const [pokemons, getPokemons, getType] = useFetch();

  useEffect(() => {
    if (typeFilter) {
      getType(typeFilter);
    } else {
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=1305`;
      getPokemons(url);
    }
  }, [typeFilter]);

  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = "";
  };

  console.log(typeFilter);

  const cbFilter = (poke) => {
    return poke.name.includes(inputValue);
  };

  const quantity = 4,
    total = Math.ceil(pokemons?.results.filter(cbFilter).length / quantity);

  const pagination = () => {
    const end = quantity * paginate,
      start = end - quantity,
      card = pokemons?.results.filter(cbFilter).slice(start, end);
    return card;
  };
  console.log(textInput);
  return (
    <div className="pokedex">
      <h3 className="pokedex_wave">
        <span>Welcome {trainer},</span>
        <span> here you can find your favorite pokemon</span>
      </h3>
      <div className="pokedex_filters">
        <form className="pokedex_form" onSubmit={handleSubmit}>
          <input className="pokedex_input" type="text" ref={textInput} />
          <button className="pokedex_btn"> Search</button>
        </form>

        <PokeSelect setTypeFilter={setTypeFilter} />
      </div>
      <div className="pokedex_container">
        {pagination()?.map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
      <div className="pokedex_paginate">
        <Paginate total={total} />
      </div>
    </div>
  );
};

export default Pokedex;
