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
    axios.get('/mocks/products.json').then(response => {
      const data = response.data;
      setProducts(data);
    }).catch(err => console.log(err));

    const addProductsId = async () => {
      let prodId = [];
      if (products) {
        await products.map(el => {
          prodId.push(`/products/${el.id}`);
          return 1;
        })
      }
      setProductsId(prodId);
    };
    addProductsId();

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
              <Route path={'*'} element={<ErrorPage status={404} />} />
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
