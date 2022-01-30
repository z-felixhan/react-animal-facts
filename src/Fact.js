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

  const { name, latin_name, animal_type } = fact;

  return (
    <article className="review">
      <h4 className="author">{name}</h4>
      <p className="job">{latin_name}</p>
      <p className="info">{animal_type}</p>
    </article>
  );
};

export default Fact;
