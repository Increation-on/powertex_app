import React, { Suspense } from 'react';
import styles from './styles/products.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './../UI/Loader';
import ProductCardFallback from './ProductCardFallback';
import RequestService from '../api/RequestService';

const LazyProductCard = React.lazy(() => import('./ProductCard'));


const Products = () => {

  const [products, setProducts] = useState(null);

  // useEffect(() => {

  //   axios.get('/mocks/products.json').then(response => {
  //     const data = response.data;
  //     setProducts(data);
  //   }).catch(err => console.log(err));

  // }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await RequestService.getProducts();
      const data = response;
      setProducts(data);
    }
    fetchProducts();
  }, []);


  return (
    <main className={styles.main_products}>
      <div className={styles.products_wrapper}>

        {products ? products.map(product => {
          return (
            <Suspense key={product.id} fallback={<ProductCardFallback key={product.id} product={product}/>}>
              <LazyProductCard key={product.id} product={product} />
            </Suspense>
          )
        }) : <Loader />}

      </div>
    </main>
  )
}

export default Products;