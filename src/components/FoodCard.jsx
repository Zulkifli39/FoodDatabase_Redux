import { IoIosStar } from "react-icons/io";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/slices";

function FoodCard({ id, name, price, desc, img, rating, onAddToCart }) {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt={id}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">Rp.{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 55)}....</p>
      <div className="flex justify-between">
        <span className="flex items-center">
          <IoIosStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id,
                name,
                price,
                rating,
                img,
                qty: 1,
              })
            );
            // Untuk menampilkan alert Ketika Di Klik (Menambahkan Name Agar Yang Tampil Sesuai Di KLik => Name Dari FoodItems )
            onAddToCart(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

FoodCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default FoodCard;
