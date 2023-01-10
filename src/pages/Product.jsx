import React from 'react';
import styles from './styles/product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import axios from 'axios';


const Product = () => {

  const params = useParams();
  const paramsId = Number(params.id);
  const productID = paramsId - 1;

  const [detailedProducts, setDetailedProducts] = useState();

  useEffect(() => {
    axios.get('/mocks/detailedProductNew.json').then(response => {
      const data = response.data;
      setDetailedProducts(data);
    }).catch(err => console.log(err));
  }, []);


  return detailedProducts ? (
    <div className={styles.product_main}>
      <div className={styles.product_wrapper}>
        <h1 className={styles.product_title}>{detailedProducts[productID].title}</h1>
        <p className={styles.product_description_short}>{detailedProducts[productID].caption}</p>
        <img src={detailedProducts[productID].img} alt="membrane" className={styles.product_img} />
        <div className={styles.product_tabs}>
          <Tabs disableUpDownKeys={true}>
            <TabList>
              <Tab defaultfocus="true"><div className={styles.tabs_header}>Описание</div></Tab>
              <Tab><div className={styles.tabs_header}>Применение</div></Tab>
              <Tab><div className={styles.tabs_header}>Технические характеристики</div></Tab>
            </TabList>
            <TabPanel>
              {detailedProducts[productID].description.map(descr => {
                return (
                  <div className={styles.product_description_wrapper} key={descr.id}>
                    <div className={styles.product_description_title}>
                      <h1>{descr.title}</h1>
                    </div>
                    {/* DOMPURIFY */}
                    <p className={styles.product_description} dangerouslySetInnerHTML={{ __html: descr.text }}></p>
                  </div>
                )
              })}
            </TabPanel>
            <TabPanel>
              <div className={styles.applicate_wrapper}>
                {detailedProducts[productID].applicate.map(item => {
                  return (
                    <div className={styles.applicate_description} key={item.id}>
                      <h1>{item.title}</h1>
                      <img src={item.img} alt="a1" />
                      {/* DOMPURIFY */}
                      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                  )
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.specifications_wrapper}>
                <h1>{detailedProducts[productID].specifications.title}</h1>
                <div className={styles.specifications_table}>
                  {detailedProducts[productID].specifications.features.map(item => {
                    return (
                      <div className={styles.specifications_table_row} key={item.id}>
                        {/* DOMPURIFY */}
                        <span dangerouslySetInnerHTML={{ __html: item.feature }}></span>
                        <span dangerouslySetInnerHTML={{ __html: item.value }}></span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  ) : <div>loading</div>
}

export default Product;