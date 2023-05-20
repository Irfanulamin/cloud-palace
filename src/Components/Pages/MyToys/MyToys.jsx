import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysTabular from "./MyToysTabular";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [specifiedToy, setSpecifiedToy] = useState({});
  const { user } = useContext(AuthContext);
  const { price, quantity, description } = specifiedToy;

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

  const findToyData = (id) => {
    const specificToyData = myToys.find((myToy) => myToy._id === id);
    setSpecifiedToy(specificToyData);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price?.value;
    const quantity = form.quantity?.value;
    const description = form.description?.value;

    const updatedToyDetails = { price, quantity, description };

    fetch(`http://localhost:7000/toys/${specifiedToy?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedToyDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="bg_tags px-24 py-44">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg_secondary ">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm border-none font-bold btn-circle hover:bg-white hover:text-black bg-stone-700  absolute right-10 top-10"
          >
            ✕
          </label>
          <form onSubmit={handleUpdate}>
            <div className="p-5 flex w-3/4  items-center justify-center">
              <div className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl font-semibold primary_font">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    required
                    className="input mb-3 input-bordered"
                    defaultValue={price}
                    placeholder="Price"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl font-semibold primary_font">
                      Quantity
                    </span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    placeholder="Quantity"
                    className="input mb-3 input-bordered"
                    defaultValue={quantity}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl font-semibold primary_font">
                      Description
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    required
                    className="input mb-3 input-bordered"
                    defaultValue={description}
                  />
                </div>
                <p className="text-base font-semibold">
                  Please click on update button then click on cross buttton to
                  close the modal.
                </p>
              </div>
            </div>
            <div className="modal-action">
              <input
                className="px-4 py-2 transition hover:bg-white hover:text-black bg-stone-700 rounded text-white uppercase text-xs font-bold"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      </div>
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
                  findToyData={findToyData}
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
