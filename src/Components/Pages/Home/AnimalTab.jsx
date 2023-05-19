import React, { useState, useEffect, useContext } from "react";
import ToyCard from "./ToyCard";

const AnimalTab = ({ toastifyWarning }) => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/toys")
      .then((res) => res.json())
      .then((data) => {
        const categoryToys = data.filter((toy) => toy.category === "Animal");
        setToys(categoryToys);
      });
  }, []);

  return (
    <>
      <div className="p-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {toys.map((toy) => (
          <ToyCard
            toy={toy}
            toastifyWarning={toastifyWarning}
            key={toy._id}
          ></ToyCard>
        ))}
      </div>
    </>
  );
};

export default AnimalTab;
