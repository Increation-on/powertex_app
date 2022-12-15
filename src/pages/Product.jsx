import React from 'react';
import styles from './styles/product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {

  const params = useParams();
  const paramsId = Number(params.id);
  const productID = paramsId - 1;

  const [detailedProducts, setDetailedProducts] = useState();

  useEffect(() => {
    axios.get('/mocks/DetailedProducts.json').then(response => {
      const data = response.data;
      setDetailedProducts(data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.product_main}>
      {detailedProducts && <div className={styles.product_wrapper}>
        <div className={styles.product_background} style={{ backgroundImage: `url(${detailedProducts[productID].img})` }}></div>
      </div>}
    </div>
  )
}

export default Product;