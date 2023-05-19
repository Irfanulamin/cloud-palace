import React, { useState, useEffect, useContext } from "react";
import ToyCard from "./ToyCard";

const DinosaurTab = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const categoryToys = data.filter((toy) => toy.category === "Dinosaur");
        setToys(categoryToys);
      });
  }, []);

  return (
    <div className="p-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {toys.map((toy) => (
        <ToyCard toy={toy} key={toy._id}></ToyCard>
      ))}
    </div>
  );
};

export default DinosaurTab;
