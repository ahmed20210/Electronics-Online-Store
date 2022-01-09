import React from "react";
import logo from "../../../img/logo.png";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import "./Menu.css";
const Menu = () => {
  const [activeNavBar, setactiveNavBar] = React.useState(false);
  const handleClick = () => {
    activeNavBar ? setactiveNavBar(false) : setactiveNavBar(true);
  };
  const navList = [
    "Home",
    "Hot Deals",
    "Categories",
    "Laptop",
    "Smartphones",
    "Cameras",
    "Accessories",
  ];
  const [activeItem, setactiveItem] = React.useState(0);
  return (
    <>
      {console.log(activeNavBar)}
      <div className=' border-b-4 border-red-600 bg-gray-900 flex flex-col justify-center md:flex-row items-center md:justify-around'>
        <div className='mt-5 lg:mb-5'>
          <img src={logo} alt='' />
        </div>
        <div>
          <form className='my-5 flex px-5 flex-nowrap text-sm'>
            <select className='pl-4 pr-2 border-r-2 bg-white rounded-l-full w-36 input-select h-10 text-gray-700'>
              <option value='0'>All Categories</option>
              <option value='1'>Category 01</option>
              <option value='1'>Category 02</option>
            </select>
            <input
              className=' w-3/5 input h-10 pl-2'
              placeholder='Search here'></input>
            <button className=' rounded-r-full h-10 w-32 text-white font-semibold bg-red-700'>
              Search
            </button>
          </form>
        </div>
        <div className='text-sm mb-5 flex text-white'>
          <div className='flex items-center flex-col'>
            <AiOutlineHeart className='my-1 text-xl' />
            <span className=' whitespace-nowrap'>Your Wishlist</span>
          </div>
          <div className=' mx-10 flex flex-col items-center'>
            <MdShoppingCart className='my-1 text-xl' />
            <span className=' whitespace-nowrap'>Your Cart</span>
          </div>
          <div
            onClick={handleClick}
            className=' md:hidden flex flex-col items-center'>
            <AiOutlineMenu className='my-1 text-xl' />
            <span> Menu</span>
          </div>
        </div>
      </div>
      {/* Navigation Bar */}
      <div
        className={`${
          activeNavBar ? "Navigation " : " hidden md:flex"
        } cursor-pointer border-b-2 border-b-gray `}>
        <ul className='flex-col md:flex-row items-start container my-2'>
          {navList.map((item, index) => (
            <li
              key={index}
              className={`${activeItem === index ? "activeNav" : ""} afterItem`}
              onClick={(e) => {
                setactiveItem(index);
                setactiveNavBar(false);
              }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
