import './App.css';
import{BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Collection from './Components/Collection/Collection'
import Carousel from './Components/Carousel/Carousel';
import HotDeals from './Components/HotDeals/HotDeals';
import SignUP from './Components/SignUP/SignUP';
import Footer from './Components/Footer/Footer'
import CopyRight from './Components/Copyright/CopyRight';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <div className='w-full flex flex-col justify-center items-center'>
        <Collection />
        <Carousel department='NEW PRODUCTS' />
      </div>
      <HotDeals />
      <Carousel department='TOP SELLING ' />
      <SignUP/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
