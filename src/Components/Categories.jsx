import React, { useEffect, useState } from "react";
import { getCategories } from "../api/api";

const Categories = ({ selected, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Add this line

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-2 text-lg font-semibold">Categories</h2>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onChange("")}
              className={`block text-left ${!selected ? "font-bold" : ""}`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onChange(cat)}
                className={`block text-left ${
                  selected === cat ? "font-bold" : ""
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
