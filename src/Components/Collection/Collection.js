import React, { Component } from "react";
import camera from "../../img/product09.png";
import laptop from "../../img/product08.png";
import accessories from "../../img/product02.png";
import { IoArrowForwardCircle } from "react-icons/io5";
import "./Collection.css";
class Collection extends Component {
  render() {
    const collection = [
      { link: laptop, name: "Laptop" },
      { link: accessories, name: "Accessories" },
      { link: camera, name: "Camera" },
    ];
    return (
      <div className='container'>
        <ul className='flex mt-10 flex-wrap md:flex-nowrap lg:flex-nowrap '>
          {collection.map((item ,index) => (
            <li key={index} className='m-3 w-full col lg:w-1/3 md:w-1/2 h-64 collection overflow-hidden relative'>
              <div className='imge bg-gray-300 h-64 relative'>
                <img src={item.link} alt='' />
              </div>
              <div
                className='z-20 absolute w-4/6 top-0 left-0 text-yellow-50 flex items-start justify-start p-5 flex-col
                '>
                <p className='text-left text-xl font-bold lg:text-3xl'>
                  {item.name} Collection
                </p>
                <div className='flex whitespace-nowrap items-center cursor-pointer'>
                  <small>SHOP NOW </small>
                  <span className=' mx-1 '>
                    <IoArrowForwardCircle />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Collection;
