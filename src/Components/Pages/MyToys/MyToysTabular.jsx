import React from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

const MyToysTabular = ({ myToy, handleDelete, findToyData }) => {
  const {
    _id,
    name,
    email,
    toyName,
    image,
    category,
    price,
    rating,
    quantity,
    description,
  } = myToy;
  return (
    <tr>
      <th className="text-lg font-semibold ">{name}</th>
      <td className="text-base font-semibold">{email}</td>
      <td className="primary_font text-lg">{toyName}</td>
      <td className="text-base font-semibold">{image}</td>
      <td className="text-base font-semibold">{category}</td>
      <td className="text-base font-semibold text-green-600">{price}</td>
      <td className="text-base font-semibold text-yellow-600">{rating}</td>
      <td className="text-base font-semibold text-red-600">{quantity}</td>
      <td className="text-xs font-semibold">{description}</td>
      <td>
        <label htmlFor="my-modal-3" onClick={() => findToyData(_id)}>
          <RiEditBoxLine className="h-5 w-5 text-green-600"></RiEditBoxLine>
        </label>
      </td>
      <td>
        <AiOutlineDelete
          className="h-5 w-5 text-red-600"
          onClick={() => handleDelete(_id)}
        ></AiOutlineDelete>
      </td>
    </tr>
  );
};

export default MyToysTabular;
