import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/slices/slices";

import toast from "react-hot-toast";

function ItemCart({ id, name, price, img, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-5 relative">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed`, {});
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold ">Rp.{price}</span>
          <div className="flex justify-center items-center gap-3 absolute right-7">
            <CiCirclePlus
              onClick={() => dispatch(increaseQty({ id }))}
              className=" text-gray-600 hover:text-white hover:bg-green-500 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <CiCircleMinus
              onClick={() => dispatch(decreaseQty({ id }))}
              className=" text-gray-600 hover:text-white hover:bg-green-500 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ItemCart.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default ItemCart;
