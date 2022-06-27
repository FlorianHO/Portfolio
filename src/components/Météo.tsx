import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";

const Meteo = () => {
  const [data, setData] = useState<Array<string>>([]);
  const [City, setCity] = useState<string>("Montréal");
  const [isFetched, setIsFetched] = useState<boolean>(false);
  let InputMeteo = useRef<HTMLInputElement>();
  const ApiKey : string = process.env.NEXT_PUBLIC_API_URL;
  let Url : string = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}&units=metric&lang=fr`;

  const fetchData = async () => {
    const result = await axios(Url);
    setData(result.data);
    setIsFetched(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(InputMeteo.current.value);
    fetchData();
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  if (isFetched) {
    return (
      <>
        <section id="meteo">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Recherchez une ville..."
              ref={InputMeteo}
            />
            <button type="submit">Actualiser</button>
          </form>
          <div className="container-meteo">
            <div className="container-left-meteo">
              <div className="api-card-content">
              <Image
                  src="/assets/images/home-logo.svg"
                  alt="Logo du langage Python"
                  width={40}
                  height={40}
                />
                <h3>{data.name}</h3>
              </div>
              <div className="api-card-content">
              <Image
                  src="/assets/images/python.svg"
                  alt="Logo du langage Python"
                  width={40}
                  height={40}
                />
                <h3>{data.main.humidity}%</h3>
              </div>
              <div className="api-card-content">
              <Image
                  src="/assets/images/python.svg"
                  alt="Logo du langage Python"
                  width={40}
                  height={40}
                />
                <h3>{data.wind.speed} km/h</h3>
              </div>
              <div className="api-card-content">
              <Image
                  src="/assets/images/python.svg"
                  alt="Logo du langage Python"
                  width={40}
                  height={40}
                />
                <h3>{data.main.temp_min}°C</h3>
              </div>
              <div className="api-card-content">
              <Image
                  src="/assets/images/python.svg"
                  alt="Logo du langage Python"
                  width={40}
                  height={40}
                />
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
