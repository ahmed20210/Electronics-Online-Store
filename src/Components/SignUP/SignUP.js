import React from "react";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import {FaFacebookF} from 'react-icons/fa'
import './SignUP.css'
export default function SignUP() {
  return (
    <div className="formborder py-5">
      <div className='text-2xl'>
        Sign Up for the <span className='font-bold'>NEWSLETTER</span>
      </div>
      <form className='m-10'>
        <div>
          <input
            className=' w-4/12 border-2 h-10 rounded-l-full border-gray-200 px-4'
            type='email'
            id='email'
            placeholder='Search here'
            name='email'></input>
          <button className=' px-10 h-10 text-white font-semibold bg-red-600 rounded-r-full'>
            Subscribe
          </button>
        </div>
        <div className="flex justify-center my-10">
          <ul>
            <li className=" text-blue-700">
              <FaFacebookF />
            </li>
            <li className=" text-blue-500">
              <AiOutlineTwitter />
            </li>
            <li className=" text-red-600">
              <BsInstagram />
            </li>
            <li className=" text-red-600">
              <BsPinterest />
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
