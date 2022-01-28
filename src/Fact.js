import { useEffect } from "react";

const Fact = () => {
  const url = "https://zoo-animal-api.herokuapp.com/animals/rand";

  const fetchFacts = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return <h2>Fact Component</h2>;
};

export default Fact;
