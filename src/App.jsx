import React, { useEffect, useState } from "react";
import { fetchProducts } from "./services/productService";
import { useDispatch, useSelector } from "react-redux"; 
import { addToCart } from "./actions/cartActions"; 

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // استدعاء useDispatch
  const cartItems = useSelector((state) => state.cartItems); 

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price} DZD</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
