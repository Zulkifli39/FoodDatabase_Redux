import { useEffect, useState } from "react";

import FoodData from "../data/FoodData";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  // Untuk menampilkan semua list Category Food
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);
  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="flex my-5 gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden  ">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="px-3 py-2 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white "
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryMenu;
