import React from 'react'
import './Footer.css'
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
export default function Footer() {
    return (
      <div className='flex p-10 justify-evenly flex-wrap text-white footerf'>
        <div className='footergrid'>
          <p>ABOUT US</p>
          <span className='text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut.
          </span>
          <ul className=''>
            <li>
              <MdLocationOn />
              1734 Egypt Tanta
            </li>
            <li>
              <BsTelephoneFill />
              +020-114-781-238
            </li>
            <li>
              <AiOutlineMail />
              ahmdmsty222@gmail.com
            </li>
          </ul>
        </div>
        <div className='footergrid'>
          <p>CATEGORIES</p>
          <ul>
            <li>Hot deals</li>
            <li>Laptops</li>
            <li>Smartphones</li>
            <li>Cameras</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className='footergrid'>
          <p>INFORMATION</p>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Orders and Returns</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className='footergrid'>
          <p>SERVICE</p>
          <ul>
            <li>My Account</li>
            <li>View Cart</li>
            <li>Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    );
}
