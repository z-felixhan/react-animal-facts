import { useEffect, useState } from "react";

const Fact = () => {
  const [fact, setFact] = useState([]);
  const url = "https://zoo-animal-api.herokuapp.com/animals/rand";

  const fetchFacts = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setFact(data);
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  const {
    active_time,
    animal_type,
    diet,
    geo_range,
    habitat,
    image_link,
    latin_name,
    name,
  } = fact;

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image_link} alt="" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{latin_name}</p>
      <p className="info">
        <span className="fact-data">Active Time :</span>
        {active_time}
      </p>
      <p className="info">
        <span className="fact-data">Animal Type :</span>
        {animal_type}
      </p>
      <p className="info">
        <span className="fact-data">Diet :</span>
        {diet}
      </p>
      <p className="info">
        <span className="fact-data">Geo Range :</span>
        {geo_range}
      </p>
      <p className="info">
        <span className="fact-data">Habitat :</span>
        {habitat}
      </p>
    </article>
  );
};

export default Fact;
