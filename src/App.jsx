import { Routes, Route } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';
import './index.css';
import ScrollToTop from './ScrollToTop';
import AppRouterTest from './router/AppRouterTest';
import ErrorPage from './pages/ErrorPage';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [products, setProducts] = useState();

  const [productsId, setProductsId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://server.powertex.by/products');
        setProducts(response.data);
  
        let prodId = response.data.map(el => `/products/${el.id}`);
        setProductsId(prodId);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (!products) {
      fetchData(); // Операция выполнится только один раз при первом рендере компонента
    }
  }, [products]);

  const { pathname } = useLocation();

  const isValidPath = ['/', '/main', '/about', '/payment', '/delivery', '/products', ...productsId].includes(pathname);



  return (
    <>
      {
        !isValidPath
          ?
          <div className='wrapper'>
            <Routes>
              <Route path={'*'} element={<ErrorPage/>} status={404} />
            </Routes>
          </div>
          :
          <div className='wrapper'>
            <Header />
            {/* <AppRouterTest /> */}
            <AppRouter />
            <Footer />
            <ScrollToTop />
          </div>

      }


    </>

  );
}

export default App;
