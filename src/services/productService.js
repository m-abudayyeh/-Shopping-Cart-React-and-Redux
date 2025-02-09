import axios from "axios";

const API_URL = "https://67a83b2d203008941f695f81.mockapi.io/products"; 
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
