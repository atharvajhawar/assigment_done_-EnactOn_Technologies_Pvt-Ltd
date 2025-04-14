import React, { useEffect, useState } from "react";
import { createStore, updateStore } from "../api/api";

const StoreForm = ({ selected, refresh }) => {
  const [form, setForm] = useState({ name: "", description: "", category: "" });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selected) await updateStore(selected.id, form);
    else await createStore(form);
    refresh();
    setForm({ name: "", description: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        placeholder="Name"
        className="w-full p-2 border"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Category"
        className="w-full p-2 border"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 border"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded">
        {selected ? "Update" : "Create"} Store
      </button>
    </form>
  );
};

export default StoreForm;
