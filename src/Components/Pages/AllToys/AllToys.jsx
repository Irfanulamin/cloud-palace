import React, { useEffect, useState } from "react";
import ToyTable from "./ToyTable";
import useTitle from "../../../CustomHooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [limit, setLimit] = useState(20);
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

  const handleLimit = (value) => {
    setLimit(value);
  };

  return (
    <div className="bg_tags px-24 py-12">
      <p className="text-5xl text-center primary_font mb-32 text-white underline">
        All Toys Section
      </p>
      <div>
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
        <div className="flex justify-start items-center mb-7">
          <div className="dropdown dropdown-top">
            <label
              tabIndex={0}
              className="bg_secondary rounded uppercase font-semibold px-4 py-2.5 text-sm m-1"
            >
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li onClick={() => handleLimit(10)}>
                <a className="text-lg font-semibold  ">10</a>
              </li>
              <li onClick={() => handleLimit(20)}>
                <a className="text-lg font-semibold">20</a>
              </li>
              <li onClick={() => handleLimit(50)}>
                <a className="text-lg font-semibold">50</a>
              </li>
              <li onClick={() => handleLimit(toys.length)}>
                <a className="text-lg font-semibold">All</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-compact w-full ">
          <thead>
            <tr>
              <th></th>
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
                <ToyTable key={index} index={index} toy={toy}></ToyTable>
              ))
            : toys
                .slice(0, limit)
                .map((toy, index) => (
                  <ToyTable key={index} index={index} toy={toy}></ToyTable>
                ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
