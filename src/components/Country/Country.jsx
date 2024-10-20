import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVistedCountry }) => {
  const [visited, setVisited] = useState(false);
  const { name, flags, population, area, cca3 } = country;

  const handleClick = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <img src={flags.png} alt="" />
      <h3>Name: {name?.common}</h3>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleClick}>{visited ? "Visitied" : "Going"}</button>
      {visited && "I have visited"}
      <button onClick={() => handleVistedCountry(country)}>Add to list</button>
    </div>
  );
};

export default Country;
