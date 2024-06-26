import { useRef } from "react";
import { setTrainer } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../pages/styles/homePage.css";

const HomePage = () => {
  const textInput = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setTrainer(textInput.current.value.trim()));

    textInput.current.value = "";

    navigate("/Pokedex");
  };

  return (
    <div className="home_header">
      <span className="home_title1">
        Poke<span className="home_title2">dex</span>
      </span>

      <p className="home_p">¡Hi trainer!</p>
      <p className="home_p">To start, give me your name.</p>
      <form className="home_form" onSubmit={handleSubmit}>
        <input className="home_input" ref={textInput} type="text" />
        <button className="home_btn">start</button>
      </form>
    </div>
  );
};

export default HomePage;
