// CategoriesSidebar.jsx
import React, { useEffect, useState } from "react";
import { getCategories } from "../api/api"; // Make sure you have this API function set up

const CategoriesSidebar = ({ setCategoryFilter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data); // Assuming your API returns categories in `data`
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-1/4 p-6 bg-gray-100 border-r">
      <h2 className="mb-4 text-2xl font-semibold">Categories</h2>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className="cursor-pointer hover:text-indigo-600"
            onClick={() => setCategoryFilter(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;
