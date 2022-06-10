import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";

const Meteo = () => {
  const [data, setData] = useState([]);
  const [City, setCity] = useState("Montréal");
  const [isFetched, setIsFetched] = useState(false);
  let InputMeteo = useRef();
  const ApiKey = "27e18a30d8865d97b5eafb030c307530";
  let Url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}&units=metric&lang=fr`;

  const fetchData = async () => {
    const result = await axios(Url);
    setData(result.data);
    setIsFetched(true);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(InputMeteo.current.value);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isFetched) {
    console.log(data);
    return (
      <>
        <section id="meteo">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Recherchez une ville..."
              ref={InputMeteo}
            />
            <button type="submit">Soumettre</button>
          </form>
          <div className="container-meteo">
            <div className="container-left-meteo">
              <div className="city-name">
                <h3>{data.name}</h3>
              </div>

              <div className="api-humidity">
                <h3>{data.main.humidity}%</h3>
              </div>
              <div className="api-wind">
                <h3>{data.wind.speed} km/h</h3>
              </div>
              <div className="temp-min">
                <h3>{data.main.temp_min}°C</h3>
              </div>
              <div className="temp-max">
                <h3>{data.main.temp_max}°C</h3>
              </div>
            </div>
            <div className="container-right-meteo">
              <p>Temp. ressentie : {data.main.feels_like}°C<br/> {data.weather[0].description} </p>
              <div className="api-temp">
                <h3>{data.main.temp}°C</h3>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <div className="loading-api">
        <h2>Chargement des donneés</h2>
      </div>
    );
  }
};

export default Meteo;
