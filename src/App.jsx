import { useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import { useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>React World Tour</h1>
      <Countries></Countries>
    </>
  );
}

export default App;
