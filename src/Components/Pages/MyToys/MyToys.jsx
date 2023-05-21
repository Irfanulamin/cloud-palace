import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyToysTabular from "./MyToysTabular";
import useTitle from "../../../CustomHooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState(1);
  const [specifiedToy, setSpecifiedToy] = useState({});
  const { user } = useContext(AuthContext);
  const { price, quantity, description } = specifiedToy;
  const [control, setControl] = useState(false);

  const url = `http://localhost:7000/addedToys?email=${user?.email}&sort=${sort}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((mytoy) => mytoy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
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
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire(
            "Successfully Updated!",
            "Your data has been updated!",
            "success"
          );
          setControl(!control);
        }
      });
  };

  return (
    <div className="bg_tags px-24 py-44">
      {myToys?.length === 0 && (
        <p className="text-center font-semibold text-xl">
          You didn't add any toys
        </p>
      )}

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer ">
        <label className="modal-box relative bg_secondary" htmlFor="">
          <form onSubmit={handleUpdate}>
            <div className="p-5 flex w-3/4   items-center justify-center">
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
                  Please click on click on cross buttton to close the modal
                  after updating.
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
        </label>
      </label>
      {myToys.length !== 0 && (
        <div>
          <label className="swap">
            <input type="checkbox" />
            <div
              onClick={() => setSort(1)}
              className="swap-on bg-white px-5 py-1 rounded text-base font-bold"
            >
              Ascending{"   "}
              <span>{"<"}</span>
            </div>
            <div
              onClick={() => setSort(-1)}
              className="swap-off bg-white px-5 py-1 rounded text-base font-bold"
            >
              Descending <span>{">"}</span>
            </div>
          </label>
          <div className="overflow-x-auto ">
            <table className="table table-compact w-full ">
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
      )}
    </div>
  );
};

export default MyToys;
