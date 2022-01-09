import  { createContext } from "react";
import img1 from "../img/product01.png";
import img2 from "../img/product03.png";
import img3 from "../img/product04.png";
import img4 from "../img/product05.png";
import img5 from "../img/product06.png";
import img6 from "../img/product07.png";
const products = createContext([
  {
    name: "Product Name",
    price: 999.99,
    discount: {
      discount: true,
      value: 40,
    },
    src: img1,
    category: "Laptop",
    rate: 3,
  },
  {
    name: "Product Name",
    price: 999.99,
    discount: {
      discount: false,
      value: 0,
    },
    src: img2,
    category: "Laptop",
    rate: 2,
  },
  {
    name: "Product Name",
    price: 999.99,
    discount: {
      discount: true,
      value: 30,
    },
    src: img3,
    category: "Tablets",
    rate: 5,
  },
  {
    name: "Product Name",
    price: 999.99,
    discount: {
      discount: false,
      value: 0,
    },
    src: img4,
    category: "Accessories",
    rate: 4,
  },
  {
    name: "Product Name",
    price: 999.99,
    discount: {
      discount: false,
      value: 0,
    },
    src: img5,
    category: "Laptop",
    rate: 0,
  },
  {
    name: "Product Name",
    price: 999.99,
    discount: {
      discount: true,
      value: 10,
    },
    src: img6,
    category: "Laptop",
    rate: 0,
  },
]);

export default products;
