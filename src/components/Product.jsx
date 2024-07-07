import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { idprod } = useParams();
  const [product, setProducts] = useState({});
 
  const fetchProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    const product1 = response.data.find((item) => item.id == idprod);
    setProducts(product1);

  };

  useEffect(() => {
    fetchProduct();
  }, []);
  
  return (
    <>
    <div className="flex flex-row w-[100%] h-[100vh]">
      <div className="flex flex-col border-1 shadow-2xl w-[35%] h-[30vh] justify-center items-center p-3" >
       

        <img className="" src={product.image} alt={product.name} />
        
        
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
      </div>
    </>
  );
};

export default Product;
