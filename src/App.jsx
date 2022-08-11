import axios from "axios";
import { useState, useEffect } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./components/Card";

import "./App.scss";
import "swiper/css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=64")
      .then(({ data }) => setPokemons(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <h1>SLIDER CON REACT Y SWIPER</h1>

      <div className="container">
        <div className="swiperContainer">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {pokemons?.map((pokemon) => (
              <SwiperSlide key={pokemon?.url}>
                <Card url={pokemon?.url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination" />
      </div>
    </div>
  );
}

export default App;
