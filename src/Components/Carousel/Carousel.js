import React from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ImEye, ImCart } from "react-icons/im";
import { VscArrowSwap } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import products from '../../Api/ContextApi'
import './Carousel.css'
export default function Carousel({department}) {
  const product = React.useContext(products);
  return (
    <div className='container'>
      <div className='py-10'>
        <div>
          <div className='flex flex-col md:flex-row lg:flex-row justify-between py-5'>
            <div className='text-3xl font-semibold text-gray-800'>
              {department}
            </div>
            <ul className=''>
              <li className='afterItem relative mr-5'>Laptops</li>
              <li className='afterItem relative mr-5'>Smartphones</li>
              <li className='afterItem relative mr-5'>Cameras</li>
              <li className='afterItem relative mr-5'>Accessories</li>
            </ul>
          </div>
          <OwlCarousel
            items={4}
            className='owl-theme'
            dots={false}
            responsive={{
              0: {
                items: 2,
              },
              600: {
                items: 3,
              },
              1015: {
                items: 4,
              },
            }}
            autoplay
            nav
            loop
            margin={15}>
            {product.map((item , index) => (
              <div className='flex flex-col items-center carousel ' key={index}>
                <div className=' border-2 leading-7 relative z-10 bg-white '>
                  {item.discount.discount ? (
                    <div className=' absolute top-0 right-0 m-2 h-6 w-12  bg-red-500 text-gray-100'>{`-${item.discount.value}%`}</div>
                  ) : null}
                  <img className='img h-2/4' alt='' src={item.src} />
                  <small className=' text-gray-400'>{item.category}</small>
                  <h1>{item.name}</h1>
                  <span className=' font-bold text-red-600 text-2xl'>
                    {"$" + item.price}
                  </span>
                  {item.discount.discount ? (
                    <span className=' text-lg font-bold ml-2 line-through text-gray-400'>
                      {"$" +
                        Math.round(
                          item.price - (item.discount.value * item.price) / 100
                        )}
                    </span>
                  ) : null}
                  <div className='flex justify-center text-yellow-400 my-5'>
                    {[1, 2, 3, 4, 5].map((e) =>
                      item.rate >= e ? <AiFillStar key={e} /> : <AiOutlineStar key={e} />
                    )}
                  </div>
                  <div className='flex justify-center my-7'>
                    <div className='hovercarousel'>
                      <AiOutlineHeart />
                    </div>
                    <div className='hovercarousel'>
                      <VscArrowSwap />
                    </div>
                    <div className='hovercarousel'>
                      <ImEye />
                    </div>
                  </div>
                </div>
                <div className='shadow-sm bg-gray-900 h-20 hoveffect flex items-center justify-center'>
                  <div className='flex bg-red-600 text-white text-sm rounded-full px-5 py-2 items-center addbtn'>
                    <ImCart className=" hidden mr-7"/>
                    <button className=' font-semibold'>ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
