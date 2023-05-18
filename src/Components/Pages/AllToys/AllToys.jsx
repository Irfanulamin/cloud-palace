import React, { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  console.log(toys);

  return (
    <div className="bg_tags px-32 py-12">
      <p className="text-5xl text-center primary_font mb-32 text-white underline">
        All Toys Section
      </p>
      <div></div>
      <div className="overflow-x-auto ">
        <table className="table table-compact w-full ">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantiy</th>
              <th></th>
            </tr>
          </thead>

          {toys.map((toy, index) => (
            <ToyTable key={index} toy={toy}></ToyTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
