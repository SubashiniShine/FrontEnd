import React, { useState } from "react";

const CountrySelection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    {
      name: "Norway",
      value: "Nw",
      NearbyAreas: ["Sweden", "UK"],
    },
    { name: "India", value: "Ind", NearbyAreas: ["Nepal", "Bangladesh"] },
    {
      name: "Srilanka",
      value: "Srl",
      NearbyAreas: ["Andaman", "BayOfBengal"],
    },
  ];
  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.value === e.target.value);
    setSelectedCountry(selected);
  };
  return (
    <div>
      <h1>CountrySelection</h1>
      <select onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <>
          <h3>Country Name : {selectedCountry.name}</h3>
          <h4>NearbyAreas:</h4>
          <ul>
            {selectedCountry.NearbyAreas.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CountrySelection;
