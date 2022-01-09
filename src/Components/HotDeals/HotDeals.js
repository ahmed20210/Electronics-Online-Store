import React from "react";
import './HotDeals.css'
const Hotdeals = () => {
  const [remainTime, setremainTime] = React.useState(184500);
  const timer = () => {
    const days = Math.floor(remainTime / 24 / 60 / 60);
    const hoursLeft = Math.floor(remainTime) - days * 24 * 60 * 60;
    const hours = Math.floor(hoursLeft / 60 / 60);
    const minutesLeft = Math.floor(hoursLeft) - hours * 60 * 60;
    const minutes = Math.floor(minutesLeft / 60);
    const secondsLeft = remainTime % 60;
    return [days , hours, minutes, secondsLeft];
  };
  React.useEffect(() => {
    const interval = setInterval(() => setremainTime(remainTime - 1), 1000);
    return () => clearInterval(interval);
  }, [remainTime]);
  return (
    <div className='hotdeals p-10'>
      <div className='justify-center items-center text-gray-800'>
        <div className='flex text-white justify-center m-10'>
          <div className='countdown'>
            <span className='text-3xl'>{"0" + timer()[0]}</span>
            <small>days</small>
          </div>
          <div className='countdown'>
            <span className='text-3xl'>{timer()[1]}</span>
            <small>hour</small>
          </div>
          <div className='countdown'>
            <span className='text-3xl'>{timer()[2]}</span>
            <small>minute</small>
          </div>
          <div className='countdown'>
            <span className='text-3xl'>{timer()[3]}</span>
            <small>second</small>
          </div>
        </div>
        <p className=' text-3xl font-semibold'>HOT DEAL THIS WEEK</p>
        <p className=' text-2xl m-4'>NEW COLLECTION UP TO 50% OFF</p>
        <button className='font-bold text-sm bg-red-700 py-3 px-5 rounded-full text-white'>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Hotdeals;
