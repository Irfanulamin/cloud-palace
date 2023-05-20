import React from "react";
import { Link } from "react-router-dom";

const ToyTable = ({ toy }) => {
  const { _id, toyName, name, category, quantity, price, seller } = toy;
  return (
    <>
      <tbody>
        <tr>
          <th>
            <p className="text-base font-bold pl-2">{name}</p>
          </th>
          <td>
            <p className="text-base primary_font my-2">{toyName}</p>
          </td>
          <td>
            <p className="font-bold text-sm">{category}</p>
          </td>
          <td>
            <p className="font-bold text-sm text-green-600">{price}$</p>
          </td>
          <td>
            <p className="font-bold text-sm text-red-600">{quantity}</p>
          </td>
          <td>
            <Link
              to={`/toy/${_id}`}
              className="bg_secondary text-xs transition font-semibold py-1 px-2 hover:bg-white"
            >
              View Details
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ToyTable;
