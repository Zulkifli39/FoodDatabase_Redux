// Icon Close
import { IoClose } from "react-icons/io5";
// Icon Shop
import { FaShoppingCart } from "react-icons/fa";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useState } from "react";

function Cart() {
  // Untuk Cart aktif / close
  const [activeCart, setActiveCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);
  // Untuk Total Item
  const totalQty = cartItems.reduce((totalQTY, item) => totalQTY + item.qty, 0);
  // Total Harga (Amout)
  const totalAmount = cartItems.reduce(
    (totalAMOUNT, item) => totalAMOUNT + item.price * item.qty,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 h-full bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          {/* Untuk Cart CLose */}
          <IoClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {/* Item Cart SHOP Ketika Di Klik */}
        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCart
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="text-center">Items Cart</h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalAmount}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2 " />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5 ">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md p-3 text-5xl fixed bottom-6 right-4 cursor-pointer ${
          totalQty > 0 && "animate-bounce  delay-500 transition-all"
        } `}
      />
    </>
  );
}

export default Cart;
