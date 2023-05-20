import React, { useEffect, useState } from "react";
import ToyTable from "./ToyTable";
import useTitle from "../../../CustomHooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  const [filterToys, setFilterToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toys]);

  const handleSearch = (event) => {
    const searchedText = event.target.value;
    setSearch(searchedText);

    const filteredToys = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilterToys(filteredToys);
  };

  return (
    <div className="bg_tags px-24 py-12">
      <p className="text-5xl text-center primary_font mb-32 text-white underline">
        All Toys Section
      </p>
      <div className="flex justify-end items-center">
        <input
          type="text"
          name="search"
          className="input w-5/12 input-bordered mb-8"
          placeholder="Search here"
          value={search}
          onChange={handleSearch}
        />
      </div>
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
          {search !== ""
            ? filterToys.map((toy, index) => (
                <ToyTable key={index} toy={toy}></ToyTable>
              ))
            : toys.map((toy, index) => (
                <ToyTable key={index} toy={toy}></ToyTable>
              ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
