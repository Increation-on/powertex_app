import React from 'react';
import styles from './styles/product.module.css';
import './styles/tabs.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import axios from 'axios';
import Loader from '../UI/Loader';


const ProductDBTEST = () => {

  const params = useParams();
  const paramsId = Number(params.id);
  const productID = paramsId - 1;

  const [detailedProduct, setDetailedProduct] = useState();
  const [detailedProductApplicate, setdetailedProductApplicate] = useState();
  const [detailedProductDescription, setdetailedProductDescription] = useState();
  const [detailedProductSpecifications, setdetailedProductSpecifications] = useState();
  const [detailedProductSpecificationsFeatures, setDetailedProductSpecificationsFeatures] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/detailed_product').then(response => {
      const data = response.data;
      setDetailedProduct(data.values);
    }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/detailed_product_applicate').then(response => {
      const data = response.data;
      setdetailedProductApplicate(data.values);
    }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/detailed_product_description').then(response => {
      const data = response.data;
      setdetailedProductDescription(data.values);
    }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/detailed_product_specifications').then(response => {
      const data = response.data;
      setdetailedProductSpecifications(data.values);
    }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/detailed_product_specifications_features').then(response => {
      const data = response.data;
      setDetailedProductSpecificationsFeatures(data.values);
      console.log(data.values);
    }).catch(err => console.log(err));
  }, []);



  return detailedProduct ? (
    <div className={styles.product_main}>
      <div className={styles.product_wrapper}>
        <h1 className={styles.product_title}>{detailedProduct[productID].title}</h1>
        <p className={styles.product_description_short}>{detailedProduct[productID].caption}</p>
        <p className={styles.product_description_sizes}>{detailedProduct[productID].sizes}</p>
        <img src={detailedProduct[productID].img} alt="membrane" className={styles.product_img} />
        <div className={styles.product_tabs}>
          <Tabs disableUpDownKeys={true}>
            <TabList>
              <Tab defaultfocus="true"><div className={styles.tabs_header}>Описание</div></Tab>
              <Tab><div className={styles.tabs_header}>Применение</div></Tab>
              <Tab><div className={styles.tabs_header}>Технические характеристики</div></Tab>
            </TabList>
            <TabPanel>

              <div className={styles.product_description_wrapper}>
                <div className={styles.product_description_title}>
                  <h1>{detailedProductDescription[productID].title}</h1>
                </div>
                <p className={styles.product_description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailedProductDescription[productID].text)}}></p>
              </div>

            </TabPanel>

            <TabPanel>
              <div className={styles.applicate_wrapper}>

                <div className={styles.applicate_description}>
                  <h1>{detailedProductApplicate[productID].title}</h1>
                  <img src={detailedProductApplicate[productID].img} alt="a1" />
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailedProductApplicate[productID].description)}}></p>
                </div>

              </div>
            </TabPanel>

            <TabPanel>
              <div className={styles.specifications_wrapper}>
                <h1>{detailedProductSpecifications[productID].title}</h1>
                <div className={styles.specifications_table}>
                      <div className={styles.specifications_table_row}>
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailedProductSpecificationsFeatures[productID].feature)}}></span>
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailedProductSpecificationsFeatures[productID].value)}}></span>
                      </div>
                </div>
              </div>
            </TabPanel>

          </Tabs>
        </div>
      </div>
    </div>
  ) : <Loader />
}

export default ProductDBTEST;