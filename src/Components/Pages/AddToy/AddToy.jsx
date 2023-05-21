import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useTitle from "../../../CustomHooks/useTitle";

const AddToy = () => {
  useTitle("Add a Toy");
  const { user } = useContext(AuthContext);

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name?.value;
    const email = form.email?.value;
    const toyName = form.toyName?.value;
    const photoURL = form.photoURL?.value;
    const category = form.category?.value;
    const price = form.price?.value;
    const rating = form.rating?.value;
    const quantity = form.quantity?.value;
    const description = form.description?.value;

    const toyDetails = {
      image: photoURL,
      toyName: toyName,
      price: price,
      rating: rating,
      name: name,
      email: email,
      category: category,
      quantity: quantity,
      description: description,
    };

    fetch("http://localhost:7000/addedToys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toyDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire(
            "Your Toy has been added!",
            "You toy's details has been addded successfully!",
            "success"
          );
        }
      });

    form.reset();
  };

  return (
    <div>
      <div>
        <div className="bg_tags">
          <form onSubmit={handleAddAToy}>
            <div className="p-10 md:gap-12 lg:gap-12 flex lg:flex-row md:flex-row flex-col gap-2">
              <div className="w-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={user?.displayName}
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="E-mail"
                    defaultValue={user?.email}
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Toy Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Toy Name"
                    name="toyName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Sub Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Sub Category"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="input input-bordered h-16"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex ml-10 md:ml-0 lg:ml-0 justify-start md:justify-center lg:justify-center items-center">
              <input
                type="submit"
                value="Add The Toy"
                className="w-1/2 text-center primary_font lg:text-xl text-sm md:text-xl bg_secondary py-5 rounded mb-12"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
