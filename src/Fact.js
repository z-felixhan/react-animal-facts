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

  const { image_link, latin_name, name } = fact;

  return (
    <article className="review">
      <div className="img-container">
        <img className="animal-img" src={image_link} alt="" />
      </div>
      <h4 className="name">{name}</h4>
      <p className="latin-name">{latin_name}</p>
      {Object.keys(fact).map((key, i) => {
        if (
          key !== "id" &&
          key !== "image_link" &&
          key !== "latin_name" &&
          key !== "length_max" &&
          key !== "length_min" &&
          key !== "name" &&
          key !== "weight_max" &&
          key !== "weight_min"
        ) {
          return (
            <div key={i} className="info">
              <span className="fact-data">{key.replace(/_/g, " ")} :</span>{" "}
              {fact[key]}
            </div>
          );
        }

        return false;
      })}
    </article>
  );
};

export default Fact;
