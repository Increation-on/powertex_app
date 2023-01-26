import React from 'react';
import styles from './styles/products.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './../UI/Loader';


const Products = () => {

  const [products, setProducts] = useState();

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
            <Link to={`${product.url}/${product.id}`} key={product.id}
              className={styles.preview_card}
              style={{ backgroundImage: `url(${product.img})` }}
            >
              <div className={styles.title}>{product.title}</div>
              <div className={styles.description}>{product.description}</div>
            </Link>
          )
        }) : <Loader/>}

      </div>
    </main>
  )
}

export default Products;