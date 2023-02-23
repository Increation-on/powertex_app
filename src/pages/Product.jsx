import React from 'react';
import styles from './styles/product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import Loader from './../UI/Loader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Product = () => {

  const params = useParams();
  const paramsId = Number(params.id);
  const productID = paramsId - 1;

  const [detailedProducts, setDetailedProducts] = useState();

  useEffect(() => {
    axios.get('/mocks/detailedProduct.json').then(response => {
      const data = response.data;
      setDetailedProducts(data);
    }).catch(err => console.log(err));
  }, []);


  return detailedProducts ? (
    <div className={styles.product_main}>
      <div className={styles.product_wrapper}>
        <h1 className={styles.product_title} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailedProducts[productID].title) }}></h1>
        <p className={styles.product_description_short}>{detailedProducts[productID].caption}</p>
        <LazyLoadImage 
          alt='membrane' 
          src={detailedProducts[productID].img} 
          placeholderSrc={detailedProducts[productID].lazyimg}
          effect='blur'
          wrapperClassName={styles.product_img_wrapper}
        />
        <div className={styles.product_tabs}>
          <Tabs selectedTabClassName={styles.active_tab} disableUpDownKeys={true}>
            <TabList>
              <Tab defaultfocus="true"><div className={styles.tabs_header}>Описание</div></Tab>
              <Tab ><div className={styles.tabs_header}>Применение</div></Tab>
              <Tab ><div className={styles.tabs_header}>Технические характеристики</div></Tab>
            </TabList>
            <TabPanel>
              {detailedProducts[productID].description.map(descr => {
                return (
                  <div className={styles.product_description_wrapper} key={descr.id}>
                    <div className={styles.product_description_title}>
                      <h1>{descr.title}</h1>
                    </div>
                    <p className={styles.product_description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(descr.text) }}></p>
                  </div>
                )
              })}
            </TabPanel>

            <TabPanel>
              <div className={styles.applicate_wrapper}>
                {detailedProducts[productID].applicate.map(item => {
                  return (
                    <div className={styles.applicate_description} key={item.id}>
                      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.title) }}></h1>
                      <img className={item.img ? "" : styles.applicate_description_noimage} src={item.img} alt="" />
                      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }}></p>
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
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.feature) }}></span>
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.value) }}></span>
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
  ) : <Loader />
}

export default Product;