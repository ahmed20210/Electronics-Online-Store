import React from "react";
import{Link} from 'react-router-dom';
import './ContactInfo.css'
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn, MdAccountCircle } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
const Contactinfo = () => {
  return (
    <div className='contact grid'>
      <div className=' container flex justify-between h-auto py-3 flex-col md:flex-row'>
        <ul className=''>
          <li>
            <span>
              <BsTelephoneFill />
            </span>
            <a href='h'>+020-114-781-238</a>
          </li>
          <li>
            <span>
              <AiOutlineMail />
            </span>
            <a href='h'>ahmdmsty222@gmail.com</a>
          </li>
          <li>
            <span>
              <MdLocationOn />
            </span>
            <a href='h'>1734 Egypt Tanta</a>
          </li>
        </ul>
        <ul>
          <Link className='mx-5 hover:text-red-700' to='/'>
            <span>
              <BsCurrencyDollar />
            </span>
            USD
          </Link>
          <Link className='hover:text-red-700' to='/'>
            <span>
              <MdAccountCircle />
            </span>
            My Account
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Contactinfo;
