import React from 'react';
import styles from './styles/products.module.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './../UI/Loader';


const Products = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {

    axios.get('/mocks/products.json').then(response => {
      const data = response.data;
      setProducts(data);
    }).catch(err => console.log(err));

  }, []);

  const cardRef = useRef();


  return (
    <main className={styles.main_products}>
      <div  className={styles.products_wrapper}>


        {products ? products.map(product => {
          return (

            <Link ref={cardRef} to={`${product.url}/${product.id}`} key={product.id}
              className={styles.preview_card}
              style={{ backgroundImage: `url(${product.img})` }}
            >
              {/* <div className={styles.products_description}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.description}>{product.description}</div>
              </div> */}

              <div className={styles.title_test}>{product.title}</div>
              <div className={styles.description_test}>{product.description}</div>
            </Link>

          )
        }) : <Loader />}



      </div>
    </main>
  )
}

export default Products;