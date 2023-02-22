import React, { Suspense } from 'react';
import styles from './styles/products.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './../UI/Loader';
import ProductCardFallback from './ProductCardFallback';

const LazyProductCard = React.lazy(() => import('./ProductCard'));


const Products = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {

    axios.get('/mocks/products.json').then(response => {
      const data = response.data;
      setProducts(data);
    }).catch(err => console.log(err));

  }, []);


  return (
    <main className={styles.main_products}>
      <div className={styles.products_wrapper}>

        {products ? products.map(product => {
          return (
            <Suspense fallback={<ProductCardFallback product={product}/>}>
              <LazyProductCard product={product} />
            </Suspense>
          )
        }) : <Loader />}

      </div>
    </main>
  )
}

export default Products;