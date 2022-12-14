import React from 'react';
import styles from './styles/product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {

    const params = useParams();
    const paramsId = Number(params.id);
    const productID = paramsId - 1;

    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get('/mocks/products.json').then(response => {
          const data = response.data;
          setProducts(data);
        }).catch(err => console.log(err));
      }, []);

    return (
        <div className={styles.product_wrapper}>
            {products && products[productID].id}
        </div>
    )
}

export default Product;