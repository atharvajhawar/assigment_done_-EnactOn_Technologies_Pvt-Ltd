import axios from "axios";

// ✅ Base URL for your json-server
const BASE_URL = "http://localhost:3001";

// ✅ Fetch all stores with query params
export const getStores = async (filters) => {
  const params = {
    _page: filters._page,
    _limit: filters._limit,
  };

  // Search using json-server's 'q' keyword
  if (filters.search) {
    params.q = filters.search;
  }

  // Sorting logic
  if (filters.sort) {
    const isDescending = filters.sort.startsWith("-");
    params._sort = filters.sort.replace("-", "");
    params._order = isDescending ? "desc" : "asc";
  }

  const res = await axios.get("http://localhost:3001/stores", { params });

  return {
    data: res.data,
    total: parseInt(res.headers["x-total-count"] || "0"),
  };
};

// ✅ Fetch all categories
export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories`);
  return res.data;
};

// ✅ Update a specific store
export const updateStore = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/stores/${id}`, data);
  return res.data;
};

// ✅ Create a new store
export const createStore = async (data) => {
  const res = await axios.post(`${BASE_URL}/stores`, data);
  return res.data;
};

// ✅ Delete a store
export const deleteStore = async (id) => {
  const res = await axios.delete(`${BASE_URL}/stores/${id}`);
  return res.data;
};
