import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area } = country;

  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Name: {name?.common}</h3>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
