import React from 'react';
import styles from './styles/product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loader from './../UI/Loader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import RequestService from '../api/RequestService';


const Product = () => {

  const params = useParams();
  const paramsId = Number(params.id);
  const productID = paramsId;
  const productIndex = paramsId - 1;

  // const [detailedProducts, setDetailedProducts] = useState();

  // useEffect(() => {
  //   axios.get('/mocks/detailedProduct.json').then(response => {
  //     const data = response.data;
  //     setDetailedProducts(data);
  //   }).catch(err => console.log(err));
  // }, []);

  const [detailedProduct, setDetailedProduct] = useState();
  const [detailedProductApplicate, setDetailedProductApplicate] = useState();
  const [detailedProductSpecifications, setDetailedProductSpecifications] = useState();

  useEffect(() => {
    const fetchDetailedProduct = async () => {
      const response = await RequestService.getDetailedProduct();
      const data = response;
      setDetailedProduct(data);
    }
    fetchDetailedProduct();
  }, []);


  useEffect(() => {
    const fetchProductApplicate = async () => {
      const response = await RequestService.getProductApplicate();
      const data = response;
      setDetailedProductApplicate(data);
    }
    fetchProductApplicate();
  }, []);

  useEffect(() => {
    const fetchProductSpecifications = async () => {
      const response = await RequestService.getProductSpecifications();
      const data = response;
      setDetailedProductSpecifications(data);
    }
    fetchProductSpecifications();
  }, []);

  const currentProductApplicate = () => {
    let productApllicate;
    if (detailedProductApplicate) {
      productApllicate = detailedProductApplicate.filter(e => {
        return e.fk_applicateId === productID;
      });
    }
    return productApllicate;
  }


  const currentSpecifications = () => {
    let productSpecifications;
    if (detailedProductSpecifications) {
      productSpecifications = detailedProductSpecifications.filter(e => {
        return e.fk_specificationsId === productID;
      })
    }
    return productSpecifications;
  }


  return detailedProduct ? (
    <div className={styles.product_main}>
      <div className={styles.product_wrapper}>
        <h1 className={styles.product_title} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailedProduct[productIndex].title) }}></h1>
        <p className={styles.product_description_short}>{detailedProduct[productIndex].caption}</p>
        <LazyLoadImage
          alt='membrane'
          src={detailedProduct[productIndex].img}
          placeholderSrc={detailedProduct[productIndex].lazyimg}
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
              {/* {detailedProduct[productID].description.map(descr => {
                return (
                  <div className={styles.product_description_wrapper} key={descr.id}>
                    <div className={styles.product_description_title}>
                      <h1>{descr.title}</h1>
                    </div>
                    <p className={styles.product_description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(descr.text) }}></p>
                  </div>
                )
              })} */}

              <div className={styles.product_description_wrapper}>
                <div className={styles.product_description_title}>
                  <h1>{detailedProduct[productIndex].description_title}</h1>
                </div>
                <p className={styles.product_description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailedProduct[productIndex].description_text) }}></p>
              </div>

            </TabPanel>

            <TabPanel>

              <div className={styles.applicate_wrapper}>
                <div className={styles.applicate_description}>
                  {detailedProductApplicate ? currentProductApplicate().map(el => {
                    return (
                      <div key={el.id}>
                        <h1>{el.title}</h1>
                        <img src={el.img} alt="a1" />
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(el.description) }}></p>
                      </div>
                    )
                  }) : null}
                </div>
              </div>

            </TabPanel>

            <TabPanel>
              
               <div className={styles.specifications_wrapper}>
                <h1>Технические харакстеристики</h1>
                <div className={styles.specifications_table}>
                  {detailedProductSpecifications ? currentSpecifications().map(el => {
                    return (
                      <div className={styles.specifications_table_row} key={el.id}>
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(el.title) }}></span>
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(el.value) }}></span>
                      </div>
                    )
                  }) : null}
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