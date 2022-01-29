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

  return (
    <article className="review">
      <h4 className="author">{fact.name}</h4>
      <p className="job">{fact.latin_name}</p>
      <p className="info">{fact.animal_type}</p>
    </article>
  );
};

export default Fact;
