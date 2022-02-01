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

  const { animal_type, image_link, latin_name, name } = fact;

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image_link} alt="" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{latin_name}</p>
      <p className="info">{animal_type}</p>
    </article>
  );
};

export default Fact;
