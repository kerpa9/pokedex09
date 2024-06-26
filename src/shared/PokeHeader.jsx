import "../shared/style/pokeHeader.css";
const PokeHeader = () => {
  return (
    <div className="pokeheader">
      <div className="pokeheader_red">
        <figure className="pokeheader_img">
          <img
            src="https://camo.githubusercontent.com/58f0d593d6ea48e93b0e1f325d489ac5a4ccfc82b0b8a6bfdaf781f21d9a6263/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
            alt="pokedeximage"
          />
        </figure>
      </div>
      <div className="pokeheader_black">
        <div className="pokeheader_outCircle">
          <div className="pokeheader_inCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default PokeHeader;
