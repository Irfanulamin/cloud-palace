import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysTabular from "./MyToysTabular";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:7000/addedToys?email=${user?.email}&sort=1`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [myToys]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want delete?");
    if (proceed) {
      fetch(`http://localhost:7000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="bg_tags px-24 py-44">
      <div>
        <div className="overflow-x-auto ">
          <table className="table table-compact w-full border border-black ">
            <thead>
              <tr>
                <th>Seller</th>
                <th>Email</th>
                <th>Toy Name</th>
                <th>PhotoURl</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Description</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((myToy, index) => (
                <MyToysTabular
                  key={index}
                  handleDelete={handleDelete}
                  myToy={myToy}
                ></MyToysTabular>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
